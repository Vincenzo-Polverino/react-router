import { NavLink } from "react-router"

export default function MainMenu() {

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </>
    )
}