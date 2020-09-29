import React from "react";
import Banner from "../containers/HomePage/Banner";
import About from "../containers/HomePage/About";
// import OurProjects from "../containers/HomePage/OurProjects";
import KeyServices from "../containers/HomePage/KeyServices";
import OurStats from "../containers/HomePage/OurStats";
import Testimonials from "../containers/HomePage/Testimonials";
// import Clients from "../containers/HomePage/Clients";
// import Blogs from "../containers/HomePage/Blogs";
// import ContactUs from "../containers/ContactUs";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import GlobalStyle from "../components/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
// import Fonts from ".../components/fonts";

import Fonts from "../components/fonts"

const Home = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <main>
            <SEO 
                title="Delta raza studio "
                description="Easy, Fast ,and accurate voice navigation and driving directions for you, 100% free."
            />
            <Headermenu />
            <Banner/>
            <About />
            <KeyServices />
            {/* <OurProjects /> */}
            <Testimonials />
            <OurStats />
            {/* <Clients /> */}
            {/* <Blogs /> */}
            {/* <ContactUs /> */}
            <Footer />
            
        </main>
   </div>

)

export default Home;
