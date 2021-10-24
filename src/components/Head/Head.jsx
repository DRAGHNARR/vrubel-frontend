import "./Head.css";
import Logo from "../Logo/Logo";

function Head() {
    return (
        <header className="head">
            <div className="head__links">
                <Logo/>
                <h1 className="head__title">systems/southstreams</h1>
            </div>
            <nav className="head__menu">
                <ul className="head__menu-list">
                    <li className="head__menu-list-item">Документация</li>
                    <li className="head__menu-list-item">Приложение</li>
                    <li className="head__menu-list-item">Аккаунт</li>
                </ul>
            </nav>
        </header>
    )
}

export default Head;