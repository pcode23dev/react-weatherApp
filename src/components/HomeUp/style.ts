import styled from "styled-components";


export const StyledLogo = styled.div.attrs({
    className: "d-flex gap-3 justify-content-center aligns-items-center"
  })`
    margin-top: 3rem;
 
    button {
        border: none;
        background: transparent;
        img {
            width: 2.5rem;
            @media (max-width: 575.98px) {
                width: 2rem;
            }
        }
    }
  
    h4 {
        font-size: 1.5rem;
        padding-top: 1rem;
        font-weight: 900;
        color: var(--text-title);
       
        @media (max-width: 767.98px) {
            font-size: 1.2rem;
        }

        @media (max-width: 575.98px) {
            font-size: .9rem;
        }
    }
`;

export const Greetings = styled.div.attrs({
    className: "text-center"
})`
    padding: 10rem 0 2rem 0;

    h1{
        color: var(--shape);
        span {
            @media (max-width: 575.98px) {
                &.none {
                    display: none;
                }
                &.white{
                    color: var(--shape);
                }
                font-size: 1.5rem;
            }
            &.bluebaby{
                color: var(--blue-baby);
            }
        }
    }

    h4{
        font-size: 1.5rem;
        color: var(--text-title);
        margin: 1rem; 
        font-weight: normal;

        @media (max-width: 765.98px) {
            font-size: 1.2rem;
        }
        
        @media (max-width: 575.98px) {
            font-size: 0.87rem;
        }
        
    }
`;