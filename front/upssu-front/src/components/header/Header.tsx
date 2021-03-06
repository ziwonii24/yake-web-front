import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '../../lib/useWindowSize'

import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { getToken, logout } from '../../lib/authentication'

import './style/Header.scss'
import '../../styles/scss/index.scss'

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
        setKeyword(e.target.value)
    }, [keyword])

    const handleSubmit = () => {
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
            <div className={"template-lg " + (width <= 768 && 'md-body-content')}>
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
                            placeholder='영양제 또는 증상을 검색하세요.'
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header