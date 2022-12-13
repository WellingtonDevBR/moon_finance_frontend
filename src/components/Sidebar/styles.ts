import styled from "styled-components";

interface HamburguerProps {
    open: boolean;
}

export const Container = styled.div<HamburguerProps>`
    display: ${({ open }) => open ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 16.25rem;
    padding: 2rem;
    background-color: #0D0D0F;
    height: 100%;
    gap: 1rem;
    z-index: 2;
`;

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    span {
        cursor: pointer;
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        img {
            margin-right: 3px;
            width: 30px;
            height: 30px;
        }
    }
`

export const HamburguerContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    margin: 2rem -2rem;
    cursor: pointer;
`
export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 0;
    width: 100%;

    a {
        display: flex;
        align-items: center;
        width: 90%;
        height: 3.125rem;
        border-radius: 6px;
        margin-bottom: 10px;
        text-decoration: none;
        font-size: 1.125rem;
        font-family: 'Product Sans' sans-serif;
        color: #7A7A7A;
        padding: 0 1rem;

        &.active {
            background: linear-gradient(91.13deg, #F06C2D 0%, #BD20BA 96.87%, #C223C6 100%);
            color: #fff;
        }
    }
`