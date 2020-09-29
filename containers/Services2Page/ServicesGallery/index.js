import React,{Component} from 'react';
import {ServicesGallerySection,HeadingLayout,GalleryWrapper,GalleryHeading,ImageHolder,
    NextPrev,PrevImg,NextImg,Img
} from './servicesgallery.style';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ServicesGallery } from '../../../pagedata/Services2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ServicesGalleryPage extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    openDialogBox(imageArray,idx)
    {
        this.props.openLightBox(imageArray,idx);
    }
    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }
    
    render() {
        const settings = {
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
            ]
        };
        return (
            <ServicesGallerySection>
                <Container>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <GalleryWrapper>
                            <Row>
                                <Col md={12}>
                                    <HeadingLayout>
                                        <GalleryHeading>
                                            {ServicesGallery.GalleryHeading}
                                        </GalleryHeading>
                                    </HeadingLayout>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,0)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image1)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,1)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image2)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,2)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image3)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,3)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image4)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,4)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image5)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,5)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image6)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                            </Row>
                        </GalleryWrapper>
                        <GalleryWrapper>
                            <Row>
                                <Col md={12}>
                                    <HeadingLayout>
                                        <GalleryHeading>
                                            {ServicesGallery.GalleryHeading}
                                        </GalleryHeading>
                                    </HeadingLayout>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,6)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image7)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,7)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image8)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,8)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image9)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,9)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image10)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,10)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image11)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder onClick={this.openDialogBox.bind(this,ServicesGallery,11)}>
                                        <Img 
                                                src={require("../../../assets/"+ServicesGallery.Image12)} 
                                                alt=""
                                            />
                                    </ImageHolder>
                                </Col>
                            </Row>
                        </GalleryWrapper>
                    </Slider>
                    <NextPrev>
                        <button aria-label="Prev Button" onClick={this.previous}>
                            <PrevImg src={require("../../../assets/"+ServicesGallery.PrevImg)} alt=""/>
                        </button>
                        <button aria-label="Next Button" onClick={this.next}>
                            <NextImg src={require("../../../assets/"+ServicesGallery.NextImg)} alt=""/>
                        </button>
                    </NextPrev>
                </Container>
            </ServicesGallerySection>
        );
    }
}

export default ServicesGalleryPage;
