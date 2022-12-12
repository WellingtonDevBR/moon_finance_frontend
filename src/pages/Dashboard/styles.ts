import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
    font-family: 'Product sans bold';
      font-size: 2.1875rem;
      font-weight: 700;
    }
    p {
        font-family: 'Product sans';
        font-size: 1.125rem;
        font-weight: 400;
        color: #6C6C80;
    }
`

export const CardContainer = styled.main`
    display: grid;
    grid-template-columns: minmax(min-content, auto) minmax(min-content, auto)  minmax(min-content, auto)  minmax(min-content, 1fr);
    grid-gap: 1rem;
`