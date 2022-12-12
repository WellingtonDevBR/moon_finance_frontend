import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 375px;
    height: 150px;
    background: linear-gradient(145.71deg, rgba(97, 92, 101, 0.2) 5.51%, rgba(97, 92, 101, 0.2) 56%, rgba(97, 92, 101, 0.2) 99.63%);
    border-radius: 20px;
    backdrop-filter: blur(25px);
    box-sizing: border-box;
`

export const Icon = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: inset 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    margin-left: 1.5rem;
`

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1.25rem;
    gap: 0.5rem;
`

export const CardFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 4.25rem;
    gap: 0.5rem;
    p {
        color: #61AE24;
        font-size: 1rem;
        font-family: 'Product sans';
    }
    
`