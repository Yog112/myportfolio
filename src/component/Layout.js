import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css/layout.css'

const Layout = () => {
    return (
        <>
            <header id="body-header">
                <nav>

                    <ul class="horizontal-list text-center nav-menu">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/Education'>Education</Link>
                        </li>
                        <li>
                            <Link to='/Experience'>Experience</Link>
                        </li>
                        <li>
                           <Link to='/projects'>Project</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>

                </nav>

                <div id="name-social-container">
                    <div class="text-center">
                        <h1 id="my-name">
                            YOGRAJ
                        </h1>
                    </div>
                </div>
            </header>

            <Outlet />
        </>
    )
}

export default Layout