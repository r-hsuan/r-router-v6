import React from 'react'
// import style from './Appliances.module.scss'
import { Link, Outlet } from 'react-router-dom'

function Appliances() {
    return (
        <div>
            <h2>Appliances</h2>
            <Link to="major-appliances">major-appliances</Link>
            <Link to="KitchenAppliances">KitchenAppliances</Link>
            <a href="/appliances/major-appliances">000</a>
            {/* 直接使用 anchor tag 會造成 browser 的預設行為 重整， */}
            <Outlet />
        </div>
    )
}

export default Appliances
