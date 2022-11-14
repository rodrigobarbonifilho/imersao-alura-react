import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
    /* Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.backgroundBase};
        color: ${({ theme }) => theme.textColorBase};
    }

    /* NextJS */
    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        overflow-x: hidden;
    }
    body {
        display: flex;
        flex: 1;
    }
    #__next {
        display: flex;
        flex: 1;
    }

    /* Globals */
    buttons,
    a {
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        opacity: 0;
        &:hover {
          opacity: .5;
        }
        background-color: ${({ theme }) => theme.backgroundBase};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.borderBase};
      border: 1px solid ${({ theme }) => theme.backgroundBase};
      border-radius: 12px;
    }
`;
