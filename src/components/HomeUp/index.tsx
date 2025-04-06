import logo from "../../assets/logo.svg";
import { Greetings, StyledLogo } from "./style";



export function HomeUp() {
    return (
        <>
            <StyledLogo className="d-flex justify-content-center align-items-center">
                <div className="d-flex gap-3 "> 
                    <button>
                        <i><img src={logo}alt="Logotipo"  /></i>
                    </button>
                    <h4>ALPP - WeatherPrevition</h4>
                </div>
            </StyledLogo>

            <Greetings>
                <h1><span className="none">Boas vindas ao </span><span className="bluebaby"><span className="white">ALPP</span> - WeatherPrevision</span></h1>
                <h4>Escolha um local para ver a previsão do tempo</h4>
            </Greetings>
        </>
    );
}