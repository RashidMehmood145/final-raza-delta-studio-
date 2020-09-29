import React from 'react';
import {PrivacySection,PrivacyBlockLayout,BlockHeading,BlockSubHeading,PrivacyText
} from './privacy.style';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Privacy } from '../../../pagedata/PrivacyPolicy';

const PrivacyPage  = () => {
    return (
        <PrivacySection id="PrivacyContainer">
            <Container>
                <PrivacyBlockLayout>
                    <BlockHeading>
                    {Privacy.Blocks[0].BlockHeading}
                    </BlockHeading>
                    <BlockSubHeading>
                    {Privacy.Blocks[0].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[0].PrivacyText}
                    </PrivacyText>
                </PrivacyBlockLayout>

                <PrivacyBlockLayout>
                    <BlockHeading>
                    {Privacy.Blocks[1].BlockHeading}
                    </BlockHeading>
                    <BlockSubHeading>
                    {Privacy.Blocks[1].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[1].PrivacyText}
                    </PrivacyText>
                    <BlockSubHeading>
                    {Privacy.Blocks[2].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[2].PrivacyText}
                    </PrivacyText>
                    <BlockSubHeading>
                    {Privacy.Blocks[3].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[3].PrivacyText}
                    </PrivacyText>
                    <BlockSubHeading>
                    {Privacy.Blocks[4].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[4].PrivacyText}
                    </PrivacyText>
                </PrivacyBlockLayout>

                 <PrivacyBlockLayout>
                    <BlockHeading>
                    {Privacy.Blocks[5].BlockHeading}
                    </BlockHeading>
                    <BlockSubHeading>
                    {Privacy.Blocks[5].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[5].PrivacyText}
                    </PrivacyText>
                    <BlockSubHeading>
                    {Privacy.Blocks[6].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[6].PrivacyText}
                    </PrivacyText>
                    <BlockSubHeading>
                    {Privacy.Blocks[7].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[7].PrivacyText}
                    </PrivacyText>
                    <BlockSubHeading>
                    {Privacy.Blocks[8].BlockSubHeading}
                    </BlockSubHeading>
                    <PrivacyText>
                    {Privacy.Blocks[8].PrivacyText}
                    </PrivacyText>
                </PrivacyBlockLayout>
            </Container>
        </PrivacySection>
    );
}
export default PrivacyPage;