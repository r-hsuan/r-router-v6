import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'

function Clothes() {
    console.log('clothes')
    return (
        <div>
            <h2>Clothes</h2>
            <Link to="men-clothing">Men Clothes</Link>
            <Link to="women-clothing">Women Clothes</Link>
            <Routes>
                <Route path="" element={<div>Clothes Default</div>}></Route>
                <Route
                    path="men-clothing"
                    element={<div>Men clothes</div>}
                ></Route>
                <Route
                    path="women-clothing"
                    element={<div>Women clothes</div>}
                ></Route>
                <Route
                    path="*"
                    element={<div>Clothes Catch no match Route</div>}
                ></Route>
            </Routes>
            <Outlet />
        </div>
    )
}

export default Clothes
