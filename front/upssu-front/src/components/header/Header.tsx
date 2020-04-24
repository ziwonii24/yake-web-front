import React, { FunctionComponent, useState, useEffect, useCallback, ChangeEvent, KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '../../hooks/useWindowSize'

import './style/Header.scss'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Header: FunctionComponent = () => {

    const { width } = useWindowSize()   // 768

    const [ scroll, setScroll ] = useState<number>(0)
    const [ keyword, setKeyword ] = useState<string>('')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop
        setScroll(scrollTop)
    }

    const handleClickLink = useCallback(e => {
        window.location.href = '/'
        localStorage.removeItem('a')
        localStorage.removeItem('b')
    }, [])

    const handleChangeInput = useCallback(e => {
        console.log(e.target.value)
        setKeyword(e.target.value)
        console.log(keyword)
    }, [keyword])

    const handleSubmit = () => {
        console.log('keyword', keyword)
        console.log(`/search?keyword=${keyword}`)
        window.location.href = `/search?keyword=${keyword}`
    }

    const handleEnter = useCallback(e => {
        if (e.key !== 'Enter') return
        handleSubmit()
    }, [keyword])

    return (
        <div className={'header ' + (scroll > 116 && 'header-fix')}>
            <div className="template-lg">
                <div className="user-box-lg" hidden={scroll > 116}>
                    <Link to='/login'>로그인</Link>                    
                    <Link to='/join'>회원가입</Link>
                </div>

                <div className="logo-box-lg" hidden={scroll > 116}>
                    {/* <h3>YAKE</h3> */}
                    <p onClick={handleClickLink}>YAKE</p>
                </div>

                <div className='menu-box-lg'>
                    {/* <div className="col-menu">
                        <Link to='/list/symptoms'>증상별</Link>
                        <Link to='/list/categories'>종류별</Link>
                    </div> */}
                    <div className="col-search">
                    {/* <form action={`/search?keyword=${keyword}`} method='get'> */}
                        <TextField
                            id="input-with-icon-textfield"
                            className="search-input"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon onClick={handleSubmit} />
                                    </InputAdornment>
                                ),
                            }}
                            value={keyword}
                            onChange={handleChangeInput}
                            onKeyDown={handleEnter}
                        />
                    {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header