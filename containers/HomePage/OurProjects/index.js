import React,{Component} from 'react';
import {Container} from 'react-bootstrap';
import {OurProjectsSection,
    OurProjectsOuterWrapper,
    OurProjectsWrapper,
    OurProjectsLayout,
    HeadingLayout,
    OurProjectsHeading,
    SliderLayout,
    SliderImg
} from './ourprojects.style';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { OurProjects } from '../../../pagedata/Home';

class OurProjectsPage extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
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
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            appendDots: dots => (
                <div
                    style={{
                        bottom:0,
                        width:"auto"
                    }}
                >
                    <ul style={{ lineHeight:"0px"}}> {dots} </ul>
                </div>
              ),
              customPaging: i => (
                <div style={{paddingTop:10}}>
                    <span
                        style={{
                            display:"block",
                            width: "25px",
                            height:"3px",
                            background:"#fff",
                            borderRadius: "3px",
                        }}
                    >
                    </span>
                </div>
            )
        };
        return (
            <OurProjectsSection>
                <OurProjectsOuterWrapper>
                    <OurProjectsWrapper>
                        <Container>
                            <OurProjectsLayout>
                                <HeadingLayout>
                                    <OurProjectsHeading>{OurProjects.OurProjectsHeading}</OurProjectsHeading>
                                </HeadingLayout>

                                <SliderLayout>
                                    <Slider ref={c => (this.slider = c)} {...settings}>
                                        <SliderImg 
                                            src={require("../../../assets/"+OurProjects.SliderImg1)} 
                                            alt=""
                                        />
                                        <SliderImg 
                                            src={require("../../../assets/"+OurProjects.SliderImg2)} 
                                            alt=""
                                        />
                                        <SliderImg 
                                            src={require("../../../assets/"+OurProjects.SliderImg3)} 
                                            alt=""
                                        />
                                        <SliderImg 
                                            src={require("../../../assets/"+OurProjects.SliderImg4)} 
                                            alt=""
                                        />
                                    </Slider>
                                </SliderLayout>
                            </OurProjectsLayout>
                        </Container>
                    </OurProjectsWrapper>
                </OurProjectsOuterWrapper>
            </OurProjectsSection>
        );
    }
}

export default OurProjectsPage;