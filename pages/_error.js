import React from "react"
import "../components/layout.css"
import NotFound from "../containers/PageNotFound"
import GlobalStyle from "../components/global-styles";
import Fonts from "../components/fonts";

const NotFoundPage = () => (
    <div>
        <Fonts/>
        <GlobalStyle />
        <main>
        <NotFound/>
        </main>
    </div>
)

export default NotFoundPage;
