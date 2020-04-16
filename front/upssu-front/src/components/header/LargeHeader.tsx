import React, { FunctionComponent } from 'react'

import './style/Header.scss'

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
                    <div className="col-menu">증상별 | 종류별</div>
                    <div className="col-search">search input</div>
                </div>
            </div>
        </div>
    )
}

export default LargeHeader