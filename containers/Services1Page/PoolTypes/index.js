import React from 'react';
import {WhyChooseUsSection,WhyChooseUsLeftLayout,WhyChooseUsHeading,WhyChooseUsSingle,
    NumberLayout,ImgIcon,TextLayout,SubHeading,Content,WhyChooseUsRightLayout,RightImage
} from './pooltypes.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PoolTypes } from '../../../pagedata/Services1';

const WhyChooseUsPage  = () => {
    return (
            <WhyChooseUsSection>
                <WhyChooseUsRightLayout>
                    <RightImage 
                        src={require("../../../assets/"+PoolTypes.RightImage)} 
                        alt=""
                    />
                </WhyChooseUsRightLayout>
                <WhyChooseUsLeftLayout>
                    <WhyChooseUsHeading>
                    {PoolTypes.WhyChooseUsHeading}
                    </WhyChooseUsHeading>
                    <WhyChooseUsSingle>
                        <NumberLayout>
                        <ImgIcon
                            src= {require("../../../assets/"+PoolTypes.Details[0].NumberLayout)}
                            alt=""
                            />
                        </NumberLayout>
                        <TextLayout>
                            <SubHeading>
                            {PoolTypes.Details[0].SubHeading}
                            </SubHeading>
                            <Content marginBottom>
                            {PoolTypes.Details[0].Content}
                            </Content>
                        </TextLayout>
                    </WhyChooseUsSingle>
                    <WhyChooseUsSingle>
                        <NumberLayout BeforeReq>
                            <ImgIcon
                                src= {require("../../../assets/"+PoolTypes.Details[1].NumberLayout)}
                                alt=""
                                />
                        </NumberLayout>
                        <TextLayout>
                            <SubHeading>
                            {PoolTypes.Details[1].SubHeading}
                            </SubHeading>
                            <Content marginBottom>
                            {PoolTypes.Details[1].Content}
                            </Content>
                        </TextLayout>
                    </WhyChooseUsSingle>
                    <WhyChooseUsSingle>
                        <NumberLayout>
                            <ImgIcon
                            src= {require("../../../assets/"+PoolTypes.Details[2].NumberLayout)}
                            alt=""
                            />
                        </NumberLayout>
                        <TextLayout>
                            <SubHeading>
                            {PoolTypes.Details[2].SubHeading}
                            </SubHeading>
                            <Content>
                            {PoolTypes.Details[2].Content}
                            </Content>
                        </TextLayout>
                    </WhyChooseUsSingle>
                </WhyChooseUsLeftLayout>
                </WhyChooseUsSection>
    );
}
export default WhyChooseUsPage;