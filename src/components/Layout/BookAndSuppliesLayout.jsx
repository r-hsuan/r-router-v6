import React from 'react'
import style from './BookAndSuppliesLayout.module.scss'

import { Outlet, Link } from 'react-router-dom'

function BookAndSuppliesLayout() {
    return (
        <div className={style.BookAndSuppliesLayout}>
            <aside>
                <Link to="bookliterature">Literature</Link>
                <Link to="bookchildren">Children</Link>
            </aside>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default BookAndSuppliesLayout
