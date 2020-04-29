import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '../../lib/useWindowSize'

import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { getToken, logout } from '../../lib/authentication'

import './style/Header.scss'

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

    const handleClickLogout = () => {
        logout()
        window.location.href = '/'
    }

    return (
        <div className={'header ' + (scroll > 116 && 'header-fix')}>
            <div className="template-lg">
                <div className="user-box-lg" hidden={scroll > 116}>
                { getToken() ?                  
                    <a className='logout-box' onClick={handleClickLogout}>로그아웃</a>
                :
                    <div>
                    <Link to='/login'>로그인</Link>                    
                    <Link to='/join'>회원가입</Link>
                    </div>
                }
                </div>

                <div className="logo-box-lg" hidden={scroll > 116}>
                    <p onClick={handleClickLink}>YAKE</p>
                </div>

                <div className='menu-box-lg'>
                    <div className="col-search">
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
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header