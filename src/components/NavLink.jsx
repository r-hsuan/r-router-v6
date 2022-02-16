import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLink() {
    return (
        <div>
            <nav>
                {/* NavLink */}
                <NavLink
                    to="/book"
                    style={({ isActive }) => {
                        return { color: isActive ? 'red' : '' }
                    }}
                >
                    Book
                </NavLink>
                <NavLink
                    to="/electronics"
                    className={({ isActive }) => (isActive ? style.active : '')}
                >
                    Electronics
                </NavLink>
            </nav>
        </div>
    )
}

export default NavLink
