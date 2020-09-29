import React,{Component} from "react";
import Banner from "../containers/CommonBanner";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import OurWork from "../containers/Services2Page/OurWork";
import OurServices from "../containers/Services2Page/OurServices";
import WhatWeDo from "../containers/Services2Page/WhatWeDo";
import Clients from "../containers/Services2Page/Clients";
import CTABanner from "../containers/Services2Page/CTABanner";
import ServicesGallery from "../containers/Services2Page/ServicesGallery";
import ContactUs from "../containers/ContactUs";
import GlobalStyle from "../components/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../components/fonts";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ServicePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpenLightBox: false,
            lightBoxImages:[],
            photoIndex: 0,
        }
        this.openLightBox = this.openLightBox.bind(this);
    }

    openLightBox(imageArray,idx)
    {
        const images = [];
        images.push(require("../assets/"+imageArray.Image1));
        images.push(require("../assets/"+imageArray.Image2));
        images.push(require("../assets/"+imageArray.Image3));
        images.push(require("../assets/"+imageArray.Image4));
        images.push(require("../assets/"+imageArray.Image5));
        images.push(require("../assets/"+imageArray.Image6));
        images.push(require("../assets/"+imageArray.Image7));
        images.push(require("../assets/"+imageArray.Image8));
        images.push(require("../assets/"+imageArray.Image9));
        images.push(require("../assets/"+imageArray.Image10));
        images.push(require("../assets/"+imageArray.Image11));
        images.push(require("../assets/"+imageArray.Image12));
        this.setState(
            {
                isOpenLightBox: true,
                lightBoxImages:images,
                photoIndex:idx
            }
        );
    }

    render() {
        return(
                <div>
                {

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
                                    BackgroundImg={"services-2-images/banner.jpg"}
                                    pageTitle="Services"
                                    breadCrumbsFirst="Home"
                                    breadCrumbsSecond="Services"
                                    breadCrumbsFirstLink="/"
                                    breadCrumbsSecondLink="/services-2"
                                />
                                <OurWork />
                                <OurServices />
                                <WhatWeDo />
                                <Clients />
                                <CTABanner 
                                    BackgroundImg={"services-2-images/banner-2.jpg"}
                                />
                                <ServicesGallery 
                                    openLightBox = {this.openLightBox}
                                />
                                <ContactUs />
                            </main>
                            <Footer />
                    </div>
                }
                {
                    this.state.isOpenLightBox && (
                    <Lightbox
                        mainSrc={this.state.lightBoxImages[this.state.photoIndex]}
                        nextSrc={this.state.lightBoxImages[(this.state.photoIndex + 1) % this.state.lightBoxImages.length]}
                        prevSrc={this.state.lightBoxImages[(this.state.photoIndex + this.state.lightBoxImages.length - 1) % this.state.lightBoxImages.length]}
                        onCloseRequest={() => this.setState({ isOpenLightBox: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (this.state.photoIndex + this.state.lightBoxImages.length - 1) % this.state.lightBoxImages.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (this.state.photoIndex + 1) % this.state.lightBoxImages.length,
                        })
                        }
                    />
                    )
                }   
                </div> 
            )
        }
    }

export default ServicePage;

