import React from "react";
import Helmet from "react-helmet"

const Fonts = () => {
    return(
        <Helmet>
           <link
               href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
               rel="stylesheet"/>
           <link
               href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap"
               rel="stylesheet"/>
        </Helmet>
    );
};

export default Fonts;