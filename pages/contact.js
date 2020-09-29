import React from "react";
import Banner from "../containers/CommonBanner";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import ContactDetails from "../containers/ContactPage/ContactDetails";
import ContactForm from "../containers/ContactPage/ContactForm";
import GlobalStyle from "../components/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../components/fonts";

const ContactPage = () => (
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
                BackgroundImg={"contactus-images/banner.jpg"}
                pageTitle="Get in Touch"
                breadCrumbsFirst="Home"
                breadCrumbsSecond="Get in Touch"
                breadCrumbsFirstLink="/"
                breadCrumbsSecondLink="/contact"
            />
            <ContactDetails />
            <ContactForm />
        </main>
        <Footer />
   </div>
)

export default ContactPage;
