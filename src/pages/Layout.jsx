import { Outlet } from "react-router"
import AppHeader from "../components/AppHeader"

export default function Layout() {

    return (
        <>
            <div className="container">
                <header>
                    <AppHeader />
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}