import styled from "styled-components";

export const StyledArea = styled.div`
  input {

    background: var(--input-bg);
    font-size: 1.5rem;
    padding: 1.2rem 1.4rem;
    color: var(--text-body);
    border: none;
    margin-top: .4rem;

    &:focus {

      background: var(--input-bg);
      color: var(--text-body);
      outline: none;

    }

    &::placeholder {
      color: var(--text-body-blur);
    }

    @media (max-width: 767.98px) {
      font-size: 1.2rem;
      padding: 1.2rem 1.4rem;
    }

    @media (max-width: 575.98px) {
      font-size: 1rem;
      padding: 1rem 1.2rem;
    }
  }

  button {
    padding: 1.5rem 0 1rem 0;
    margin-left: -50px;
    
    img {
      width: 20px;
    }

  }

`;