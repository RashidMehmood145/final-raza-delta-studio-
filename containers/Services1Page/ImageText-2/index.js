import React from 'react';
import {WhyChooseUsSection,WhyChooseUsLeftLayout,WhyChooseUsHeading,RightImage,
    WhyChooseUsSingle,Content,WhyChooseUsRightLayout
} from './imagetext2.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageText2 } from '../../../pagedata/Services1';

const ImageText2Page  = () => {
    return (
            <WhyChooseUsSection>
                <WhyChooseUsRightLayout>
                    <RightImage 
                        src={require("../../../assets/"+ImageText2.RightImage)} 
                        alt=""
                    />
                </WhyChooseUsRightLayout>
                <WhyChooseUsLeftLayout>
                    <WhyChooseUsHeading>
                    {ImageText2.WhyChooseUsHeading}
                    </WhyChooseUsHeading>
                    <WhyChooseUsSingle>
                        <Content marginBottom>
                        {ImageText2.Content1}
                        </Content>
                        <Content>
                        {ImageText2.Content2}
                        </Content>
                    </WhyChooseUsSingle>
                </WhyChooseUsLeftLayout>
            </WhyChooseUsSection>
    );
}
export default ImageText2Page;