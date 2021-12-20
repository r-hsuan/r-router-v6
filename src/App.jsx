import style from './App.module.scss'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import Appliances from './pages/Appliances.jsx'
import Electronics from './pages/Electronics.jsx'
import BookAndSupplies from './pages/BookAndSupplies.jsx'
import Clothes from './pages/Clothes.jsx'
import NotMatchRoute from './pages/NotMatchRoute.jsx'

import PC from './components/PC.jsx'
import Mobile from './components/Mobile.jsx'

import MajorAppliance from './components/Appliances/MajorAppliances.jsx'
import KitchenAppliances from './components/Appliances/KitchenAppliances.jsx'

import BookAndSuppliesDefualt from './components/BookAndSupplies/BookAndSuppliesDefualt'
import BookLiterature from './components/BookAndSupplies/BookLiterature.jsx'
import BookChildren from './components/BookAndSupplies/BookChildren'

import SiteMap from './pages/SiteMap.jsx'

import BookAndSuppliesLayout from './components/Layout/BookAndSuppliesLayout.jsx'

console.log(style)

function App() {
    return (
        <div>
            <nav>
                <ul className={style.ul}>
                    <li>
                        <NavLink
                            to="/electronics"
                            className={({ isActive }) =>
                                isActive ? style.active : ''
                            }
                        >
                            3C
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/appliances"
                            className={({ isActive }) =>
                                isActive ? style.active : ''
                            }
                        >
                            家電
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/clothes"
                            className={({ isActive }) =>
                                isActive ? style.active : ''
                            }
                        >
                            服飾
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bookandsupplies"
                            style={({ isActive }) => {
                                return { color: isActive ? 'red' : '' }
                            }}
                        >
                            圖書文具
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sitemap"
                            style={({ isActive }) => {
                                return { color: isActive ? style.active : '' }
                            }}
                        >
                            SiteMap
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/electronics" />}
                ></Route>

                <Route path="/electronics" element={<Electronics />}>
                    <Route path="pc" element={<PC />}></Route>
                    <Route path="mobile" element={<Mobile />}></Route>
                </Route>

                {/* ------------------------- */}

                <Route path="/appliances" element={<Appliances />}>
                    <Route
                        path=""
                        element={<div>Appliances Default </div>}
                    ></Route>
                    <Route
                        path="major-appliances"
                        element={<MajorAppliance />}
                    ></Route>
                    <Route
                        path="KitchenAppliances"
                        element={<KitchenAppliances />}
                    ></Route>
                    <Route
                        path="*"
                        element={<div>Catch no match route </div>}
                    ></Route>
                </Route>

                {/* ------------------------- */}
                <Route path="/clothes/*" element={<Clothes />}>
                    {/* <Route path='' element={<div>Defulat Clothes</div>}></Route>
                    <Route path='*' element={<div>Clothes NotFound</div>}></Route> */}
                </Route>

                {/* ------------------------- */}

                <Route path="/bookandsupplies" element={<BookAndSupplies />}>
                    <Route element={<BookAndSuppliesLayout />}>
                        <Route
                            index
                            element={<BookAndSuppliesDefualt />}
                        ></Route>
                        <Route
                            path="bookliterature"
                            element={<BookLiterature />}
                        ></Route>
                        <Route
                            path="bookchildren"
                            element={<BookChildren />}
                        ></Route>
                    </Route>

                    {/* ------------------------- */}
                </Route>

                <Route path="/sitemap" element={<SiteMap />}></Route>
                <Route path="/*" element={<NotMatchRoute />}></Route>
            </Routes>
            {/* <Routes></Routes> */}
            <footer></footer>
        </div>
    )
}

export default App
