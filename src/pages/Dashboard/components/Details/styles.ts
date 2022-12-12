import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin: 2.1875rem 0;
    grid-gap: 2rem;
`

export const FooterItem = styled.div`
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.875rem;
    display: flex;
    flex-direction: column;
    height: {
        
    }
    background: linear-gradient(145.71deg, rgba(97, 92, 101, 0.2) 5.51%, rgba(97, 92, 101, 0.2) 56%, rgba(97, 92, 101, 0.2) 99.63%);
    header {
        display: flex;
        border-bottom: 0.125rem solid rgba(255, 255, 255, 0.1);
        a {
            cursor: pointer;
            text-decoration: none;
            color: #FFF;
            padding: 0.5rem;
            & + a {
                margin-left: 4rem;
            }
            &.actived {
                border-bottom: 1px solid #FFF;
            }
        }
    }

    section {
        display: grid;
        grid-template-columns: 1fr 150px;
        grid-gap: 1rem;
        margin-top: 1.5rem;
        padding: 0.4rem;
        p {
            font-family: 'Product sans';
            font-size: 1.125rem;
            font-weight: 400;
            color: #C8C8C8;
        }
        span {
            text-align: end;
            font-family: 'Product sans bold';
            font-size: 1.125rem;
            font-weight: 700;
            color: #FFF;
        }
    }
`