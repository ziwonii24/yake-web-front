import React, { FunctionComponent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '../../hooks/useWindowSize'

import './style/Header.scss'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';

const Header: FunctionComponent = () => {

    const { width } = useWindowSize()   // 768

    const [ scroll, setScroll ] = useState<number>(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop
        setScroll(scrollTop)
    }

    return (
        <div className={'header ' + (scroll > 84 && 'header-fix')}>
            <div className="template-lg">
                <div className="user-box-lg" hidden={scroll > 84}>
                    <Link to='/login'>로그인</Link>                    
                    <Link to='join'>회원가입</Link>
                </div>

                <div className="logo-box-lg" hidden={scroll > 84}>
                    {/* <h3>YAKE</h3> */}
                    YAKE
                </div>

                <div className='menu-box-lg'>
                    <div className="col-menu">
                        <Link to='/symptoms'>증상별</Link>
                        <Link to='/categories'>종류별</Link>
                    </div>
                    <div className="col-search">
                    <form noValidate autoComplete="off">
                        <TextField
                            id="input-with-icon-textfield"
                            className="search-input"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header