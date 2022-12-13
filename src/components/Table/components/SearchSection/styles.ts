import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #615C65;
    padding: 10px 30px 20px 30px;

    p {
        font-size: 1rem;
        font-family: 'Product sans';
        font-weight: 400;
    }
`;

export const InputNumber = styled.input`
    width: 80px;
    height: 40px;
    background-color: transparent;
    backdrop-filter: blur(25px);
    box-sizing: border-box;
    border: 1px solid #615C65;
    border-radius: 10px;
    margin: 0 10px;

    display: inline-block;
    text-align: center;
    color: #615C65;
`;

export const InputSearch = styled.input`
    width: 150px;
    height: 40px;
    background-color: transparent;
    backdrop-filter: blur(25px);
    box-sizing: border-box;
    border: 1px solid #615C65;
    border-radius: 10px;
    padding: 0 20px;
    color: #615C65;
`;