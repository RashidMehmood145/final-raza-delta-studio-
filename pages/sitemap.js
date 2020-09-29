import React from "react";
import Banner from "../containers/CommonBanner";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import Sitemap from "../containers/SitemapPage";
import GlobalStyle from "../components/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../components/fonts";

const SitemapPage = () => (
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
                pageTitle="Sitemap"
                breadCrumbsFirst="Home"
                breadCrumbsSecond="Sitemap"
                breadCrumbsFirstLink="/"
                breadCrumbsSecondLink="/sitemap"
            />
            <Sitemap />
        </main>
        <Footer />
   </div>
)

export default SitemapPage;
