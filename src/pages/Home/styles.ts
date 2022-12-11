import styled from "styled-components"


export const HomeContainer = styled.div`
    min-height: 110vh;
    margin: 5.4rem;
`

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const PosterContainer = styled.header`        
    img {
        width: 888px;
        height: 853px;
    }
    margin-right: 16rem;
`

export const MainFormContainer = styled.header`
    span{
        img {
            margin-right: 0.3rem;

            height: 30px;
            width: 30px;
        }
        display: flex;
        align-items: center;

        font-family: 'Product sans', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
    }

    h1 {
        margin-top: 3.75rem;
        font-family: 'Product sans bold', sans-serif;
        font-size: 2.8rem;
        font-weight: 700;

        margin-bottom: 1rem;
    }

    p {
        font-family: 'Product sans', sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        color: #66676D;
        &:last-child {
            align-self: center;
        }
        
        margin-bottom: 2.5rem;
        a {
            color: #fff;
            text-decoration: none;
            font-family: 'Product sans bold', sans-serif;
            font-size: 1.125rem;
            font-weight: 700;
        }
    }
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Input = styled.input`
    width: 100%;
    height: 5rem;
    border: 1px solid #9B9B9B;
    border-radius: 1.25rem;
    background-color: rgba(137, 137, 137, 0.1);
    padding: 2rem;
    margin-bottom: 2rem;
    color: #fff;
`
export const FormOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    span {
        font-family: 'Product sans', sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        &:last-child {
            color: #9B9B9B;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
        input[type="checkbox"] {
            -moz-appearance:none;
            -webkit-appearance:none;
            -o-appearance:none;
            outline: none;
            content: none;	
            margin-right: 0.5rem;

            &[type="checkbox"]:before {
                font-family: "Product sans bold";
                content: "✓";
                font-size: 1rem;
                color: transparent !important;
                background: #161818;
                display: block;
                width: 1.875rem;
                height: 1.875rem;
                border-radius: 8px;
                text-align: center;
                line-height: 2rem;
                mix-blend-mode: normal;
            }
            &[type=checkbox]:checked:before {
                color: #898989 !important;
                mix-blend-mode: normal;
            }
        }
    }
    
`

export const Button = styled.button`
    width: 100%;
    height: 5rem;
    border-radius: 1.25rem;
    background: linear-gradient(91.13deg, #F06C2D 0%, #BD20BA 96.87%, #C223C6 100%);
    padding: 2rem;
    margin-bottom: 2rem;
    font-family: 'Product sans bold', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`
export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    div + div {
        margin-left: 2rem;
    }
`
interface containerProps {
    backgroundColor: string;
}

export const SocialMediaButton = styled.div<containerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    img {
        width: 2rem;
        height: 2rem;
    }
`

export const FooterSeparator = styled.div`
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap; 
    span {
        position: relative;
        display: inline-block;
        color: #D5D5D5;
        &:before, &:after {
            content: "";
            position: absolute;
            top: 50%;
            width: 4.875rem;
            height: 1px;
            background: #D5D5D5;
        }

        &:before {
            right: 100%;
            margin-right: 15px;
        }

        &:after {
            left: 100%;
            margin-left: 15px;
        }
    }
    margin-bottom: 3rem;
`


export const CircleContainerBottomLeft = styled.div`
    position: absolute;
    width: 490px;
    height: 490px;
    bottom: 0;
    background: linear-gradient(91.13deg, rgba(240, 108, 45, 0.5) 0%, rgba(189, 32, 186, 0.5) 96.87%, rgba(194, 35, 198, 0.5) 100%);
    filter: blur(350px);
    border-radius: 20px;
`

export const CircleContainerRightTop = styled.div`
    position: absolute;
    width: 490px;
    height: 490px;
    right: 0;
    top: 0;
    background: linear-gradient(91.13deg, rgba(240, 108, 45, 0.5) 0%, rgba(189, 32, 186, 0.5) 96.87%, rgba(194, 35, 198, 0.5) 100%);
    filter: blur(350px);
    border-radius: 20px;
`