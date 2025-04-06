// import img   from "../../assets/icons/Type=spinner-gap-regular.svg";
import { StyledArea } from "./style";

export function AreaPesquisa() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-md-4">
                <StyledArea className="col-11 col-sm-9 col-md-7 col-lg-5 d-flex ">
                    <input className="form-control" type="text" placeholder="Buscar local" name="" id="" />
                    {/* <button className="bg-transparent border-0">
                        <i>
                            <img src={img} alt="icon de pesquisa" />
                        </i>
                    </button> */}
                </StyledArea>
            </div> 
        </>
    );
}
