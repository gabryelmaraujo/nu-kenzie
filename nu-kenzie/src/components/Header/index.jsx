
import "./header.css"

import kenzieBlackLogo from "../../images/NuKenzieLogoBlack.svg"

const Header = ({setPage}) => {

    return (
        <header className="dbHeader">
            <nav className="dbNav">
                <div className="navLogo">
                    <img src={kenzieBlackLogo} alt="" />
                </div>
                <div className="goHomeDiv">
                    <button id="goHomeBttn" onClick={()=>setPage("home")}>Início</button>
                </div>
            </nav>
        </header>
    )

}

export default Header