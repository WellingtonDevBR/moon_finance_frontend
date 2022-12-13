import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    height: 5rem;
    width: 100%;
    background-color: #0D0D0F;
    z-index: 1;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {
            margin-right: 0.5rem;
        }
        P {
            font-size: 0.9375rem;
            margin-right: 1.875rem;
            font-family: 'Product Sans';
            color: #FFF;
        }
    }

    svg {
        cursor: pointer;
        margin: 0 1.875rem;
    }
`

export const InputSection = styled.section`
    svg {
        margin: 0.75rem 0.5rem;
        cursor: pointer;
        position: absolute;
    }
    input {
        height: 2.5rem;
        width: 45.625rem;
        background-color: #14161A;
        border-radius: 5px;
        padding: 0 2rem;
        font-size: 0.9375rem;
        color: #7A7A7A;
    }
`