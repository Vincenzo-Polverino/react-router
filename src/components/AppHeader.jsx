import MainMenu from "./MainManu"

export default function AppHeader() {

    return (
        <>
            <h1>React Blog Form</h1>
            <MainMenu />
            <div className="input-group mb-3">
                <div className='d-flex'>
                    <button className="btn" type="button" popovertarget="off-canvas-form">
                        Aggiungi
                    </button>
                </div>
            </div>

        </>

    )
}