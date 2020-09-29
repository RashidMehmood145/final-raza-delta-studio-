import React from "react";
import Banner from "../containers/CommonBanner";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import Privacy from "../containers/PrivacyPolicyPage/Privacy";
import GlobalStyle from "../components/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../components/fonts";

const PrivacyPage = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <main>
            <SEO 
                title="Delta raza studio"
                description="Clean and professional React NextJS Pool Website template from Garnet"
            />
            <Headermenu />
            <Banner
                BackgroundImg={"home-images/banner.jpg"}
                pageTitle="Privacy Policy"
                breadCrumbsFirst="Home"
                breadCrumbsSecond="Privacy Policy"
                breadCrumbsFirstLink="/"
                breadCrumbsSecondLink="/privacy"
            />
            <Privacy />
        </main>
        <Footer />
   </div>
)

export default PrivacyPage;
