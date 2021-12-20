import React from 'react'
import style from './Electronics.module.scss'

import { Link, Outlet } from 'react-router-dom'

function Electronics() {
    return (
        <div className={style.electronics}>
            <div className={style.electronicslist}>
                <Link to="pc">電腦</Link>
                <Link to="mobile">手機</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Electronics
