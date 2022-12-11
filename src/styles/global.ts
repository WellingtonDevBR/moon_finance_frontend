import { createGlobalStyle } from "styled-components";
import ProductSansRegular from "../fonts/product-sans/ProductSansRegular.ttf";
import ProductSansBold from "../fonts/product-sans/ProductSansBold.ttf";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Product sans';
        font-style: normal;
        font-weight: 400;
        src: url(${ProductSansRegular});
    }

    @font-face {
        font-family: 'Product sans bold';
        font-style: normal;
        font-weight: 700;
        src: url(${ProductSansBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: black;
        -webkit-font-smoothing: antialiased;
        color: #fff;
    }
    body, input, textarea, button {
        font-family: 'Product sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;
    }
`