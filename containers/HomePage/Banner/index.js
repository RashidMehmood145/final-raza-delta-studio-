import React,{Component} from "react";
import {BannerSection,
    BannerWrapper,
    BannerSlide,
    BannerImageHolder,
    BannerImage,
    BannerContents,
    BannerContentLeft,
    BannerBtn,
    BannerH3,
    BannerH4
} from './banner.style'
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Banner } from '../../../pagedata/Home';

class BannerPage extends Component {
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
            fade:true,
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            appendDots: dots => (
                <div
                    style={{
                        bottom:0,
                        width:"auto"
                    }}
                >
                    <ul style={{ lineHeight:"0px", zIndex:"800"}}> {dots} </ul>
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
            <BannerSection id="homeContainer">
                <BannerWrapper>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        Banner.BannerSlides.map((item,idx)=>{
                            return<BannerSlide>
                                <BannerImageHolder>
                                    <BannerImage 
                                        src={require("../../../assets/"+item.BannerImage)} 
                                        alt=""
                                    />
                                </BannerImageHolder>
                                <BannerContents>
                                    <BannerContentLeft>
                                        <BannerH3>{item.BannerH3}</BannerH3>
                                        <BannerH4>{item.BannerH4}</BannerH4>
                                        <BannerBtn href={item.BannerHref}>{item.BannerBtn}</BannerBtn>
                                    </BannerContentLeft>
                                </BannerContents>
                            </BannerSlide>
                        })
                    }
                    </Slider>
                </BannerWrapper>
            </BannerSection>
        );
    }
}

export default BannerPage;