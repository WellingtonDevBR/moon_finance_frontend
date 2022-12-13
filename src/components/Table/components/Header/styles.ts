import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #615C65;
    padding: 21px 34px;

    h1 {
        font-size: 1.375rem;
        font-family: 'Product sans';
        font-weight: 400;
        color: #ECEFF6;
    }
`;

export const HeaderButton = styled.button`
    cursor: pointer;
    width: 150px;
    height: 40px;
    background: linear-gradient(91.13deg, #F06C2D 0%, #BD20BA 96.87%, #C223C6 100%);
    border-radius: 5px;
    color: #fff;
    font-size: 0.9375rem;

    &:hover {
        opacity: 0.8;
    }
`;