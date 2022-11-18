import "./HomePage.css"

import kenzieLogo from "../../images/NuKenzieLogo.svg"
import kenzieBanner from "../../images/nuKenzieBanner.png"


const HomePage = () => {

    return(
        <main className="homePageMain">
        <div className="hpContainer">
          <section className="hpDescSec">
            <div className="logoDiv">
              <img src={kenzieLogo} alt="" className='logoImg'/>
            </div>
            <div className="hpDesc">
              <p className="descText">
              Centralize o controle das suas finanças
              </p>
              <p className="descSecundaryText">
              de forma rápida e segura
              </p>
            </div>
            <div className="initButtonDiv">
              <button id="initButton">Iniciar</button>
            </div>
          </section>
  
          <section className="hpBannerSec">
            <div className="hpBannerDiv">
              <img src={kenzieBanner} alt="" className="hpBannerImg" />
            </div>
          </section>
  
        </div>
  
      </main>
    )

}

export default HomePage