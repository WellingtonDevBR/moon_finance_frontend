import { createGlobalStyle } from "styled-components";
import ProductSansRegular from "../fonts/product-sans/ProductSansRegular.ttf";
import ProductSansBold from "../fonts/product-sans/ProductSansBold.ttf";
import ProductSansItalic from "../fonts/product-sans/ProductSansItalic.ttf";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Product sans';
        font-style: normal;
        font-weight: 400;
        src: url(${ProductSansRegular});
    }

    @font-face {
        font-family: 'Product sans bold';
        font-style: bold;
        font-weight: 700;
        src: url(${ProductSansBold});
    }

    @font-face {
        font-family: 'Product sans italic';
        font-style: italic;
        font-weight: 300;
        src: url(${ProductSansItalic});
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