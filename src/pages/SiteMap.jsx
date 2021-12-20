import React from 'react'
import { useNavigate } from 'react-router-dom'

function SiteMap() {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <div>
            <a onClick={() => navigate('/clothes/men-clothing')}>Clothe</a>
            {/* <button onClick={() => navi}>Click</button> */}
            {/* <button onClick={() => navigate.repl}>Click</button> */}
        </div>
    )
}

export default SiteMap
