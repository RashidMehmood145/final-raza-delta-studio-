import React from "react";
import Banner from "../containers/CommonBanner";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import Testimonials from "../containers/TestimonialsPage/Testimonials";
import GlobalStyle from "../components/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../components/fonts";

const TestimonialsPage = () => (
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
                BackgroundImg={"testimonials-images/banner.jpg"}
                pageTitle="What Our Clients Say"
                breadCrumbsFirst="Home"
                breadCrumbsSecond="Testimonials"
                breadCrumbsFirstLink="/"
                breadCrumbsSecondLink="/testimonials"
            />
            <Testimonials />
        </main>
        <Footer />
   </div>
)

export default TestimonialsPage;
