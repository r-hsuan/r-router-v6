import React from 'react'
import { Outlet } from 'react-router-dom'

function BookAndSupplies() {
    return (
        <div>
            Book and supplies
            <Outlet />
        </div>
    )
}

export default BookAndSupplies
