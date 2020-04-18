import React, { FunctionComponent } from 'react'

import './style/Header.scss'
import { Link } from 'react-router-dom'

const LargeHeader: FunctionComponent = () => {

    return (
        <div className="header">
            <div className="template-lg">
                <div className="user-box-lg">
                    <a>LOGIN</a>
                    &nbsp;|&nbsp;
                    <a>JOIN</a>
                </div>

                <div className="logo-box-lg">
                    <h3>YAKE</h3>
                </div>

                <div className="menu-box-lg">
                    <div className="col-menu">
                        <Link to='/symptoms'>증상별</Link>
                        <Link to='/categories'>종류별</Link>
                    </div>
                    <div className="col-search">search input</div>
                </div>
            </div>
        </div>
    )
}

export default LargeHeader