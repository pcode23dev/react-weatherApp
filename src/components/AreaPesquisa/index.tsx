// import img   from "../../assets/icons/Type=spinner-gap-regular.svg";
import { useRef, useState } from "react";
import { StyledArea } from "./style";
import img from "../../assets/icons/Type=spinner-gap-regular.svg"
import axios from "axios";
import { keyApi } from "../../../security";


export function AreaPesquisa() {
    const [useClima, setClima] = useState({})
    const inputRef = useRef<HTMLInputElement>(null);

    async function pesquisar() {
        const key = keyApi;
        const cidade = inputRef.current?.value || "Luanda";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
        
        
        const responseApi = await axios.get(url);

        console.log(responseApi.data);
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-md-4">
                <StyledArea className="col-11 col-sm-9 col-md-7 col-lg-5 d-flex ">
                    <input ref={inputRef} className="form-control" type="text" placeholder="Buscar local" name="" id="" />
                    <button onClick={pesquisar} className="bg-transparent border-0">
                        <i>
                            <img src={img} alt="icon de pesquisa" />
                        </i>
                    </button>
                </StyledArea>
            </div> 
        </>
    );
}
