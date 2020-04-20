import React, { FunctionComponent } from 'react'

interface MenuProps {
    mainType: string
    subType: string
}

const Menu: FunctionComponent<MenuProps> = (props : MenuProps) => {

    const { mainType, subType } = props

    return (
        <div>
            { mainType }, { subType }
        </div>
    )
}

export default Menu