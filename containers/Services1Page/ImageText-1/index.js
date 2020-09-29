import React from 'react';
import {WhyChooseUsSection,WhyChooseUsLeftLayout,WhyChooseUsHeading,WhyChooseUsSingle,
    Content,WhyChooseUsRightLayout,RightImage
} from './imagetext1.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageText1 } from '../../../pagedata/Services1';

const ImageText1Page  = () => {
    return (
            <WhyChooseUsSection>
                <WhyChooseUsLeftLayout>
                    <WhyChooseUsHeading>
                    {ImageText1.WhyChooseUsHeading}
                    </WhyChooseUsHeading>
                    <WhyChooseUsSingle>
                        <Content marginBottom>
                        {ImageText1.Content1}
                        </Content>
                        <Content>
                        {ImageText1.Content2}
                        </Content>
                    </WhyChooseUsSingle>
                </WhyChooseUsLeftLayout>
                <WhyChooseUsRightLayout>
                    <RightImage 
                        src={require("../../../assets/"+ImageText1.RightImage)} 
                        alt=""
                    />
                </WhyChooseUsRightLayout>
            </WhyChooseUsSection>
    );
}
export default ImageText1Page;