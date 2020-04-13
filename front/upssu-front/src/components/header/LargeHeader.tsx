import React, { FunctionComponent } from 'react'

import './style/Header.scss'

const LargeHeader: FunctionComponent = () => {

    return (
        <div className="template-lg">
            <div className="user-box-lg">
                <a>LOGIN</a>
                &nbsp;|&nbsp;
                <a>JOIN</a>
            </div>

            <div className="logo-box-lg">
                YAKE
            </div>

            <div className="menu-box-lg">
                <div className="col-menu">menu | menu | menu</div>
                <div className="col-search">search input</div>
            </div>
        </div>
    )
}

export default LargeHeader