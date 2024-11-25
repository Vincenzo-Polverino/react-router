import { NavLink } from "react-router"

export default function MainMenu() {

    return (
        <>
            <nav className="d-flex m-2">
                <NavLink className="text-decoration-none text-secondary m-1" to="/"><h5>Home</h5></NavLink>
                <NavLink className="text-decoration-none text-secondary m-1" to="/posts"><h5>Posts</h5></NavLink>
                <NavLink className="text-decoration-none text-secondary m-1" to="/about"><h5>About</h5></NavLink>
            </nav>
        </>
    )
}