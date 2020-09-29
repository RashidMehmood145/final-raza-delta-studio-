import React,{Component} from "react";
import Banner from "../containers/CommonBanner";
import Headermenu from "../containers/HeaderMenuBS";
import Footer from "../containers/Footer";
import About from "../containers/Services1Page/About";
import CTABanner from "../containers/Services1Page/CTABanner";
import ServicesWeProvide from "../containers/Services1Page/ServicesWeProvide";
import PoolTypes from "../containers/Services1Page/PoolTypes";
import ImageText1 from "../containers/Services1Page/ImageText-1";
import ImageText2 from "../containers/Services1Page/ImageText-2";
import Clients from "../containers/Services1Page/Clients";
import ServicesGallery from "../containers/Services1Page/ServicesGallery";
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
        images.push(require("../assets/"+imageArray.GalleryImage1));
        images.push(require("../assets/"+imageArray.GalleryImage2));
        images.push(require("../assets/"+imageArray.GalleryImage3));
        images.push(require("../assets/"+imageArray.GalleryImage4));
        images.push(require("../assets/"+imageArray.GalleryImage5));
        images.push(require("../assets/"+imageArray.GalleryImage6));
        images.push(require("../assets/"+imageArray.GalleryImage7));
        images.push(require("../assets/"+imageArray.GalleryImage8));
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
                                    BackgroundImg={"services-1-images/banner.jpg"}
                                    pageTitle="Services"
                                    breadCrumbsFirst="Home"
                                    breadCrumbsSecond="Services"
                                    breadCrumbsFirstLink="/"
                                    breadCrumbsSecondLink="/services-1"
                                />
                                <About />
                                <CTABanner 
                                    BackgroundImg={"services-1-images/banner-2.jpg"}
                                />
                                <ServicesWeProvide />
                                <PoolTypes />
                                <ImageText1 />
                                <ImageText2 />
                                <Clients />
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
