import React from 'react';
import {Container} from 'react-bootstrap';
import {
    ClientSection,
    ClientLogoLayout,
    ClientLogoHolder,
    ClientLogo,Img
} from './clients.style';

import { Clients } from '../../../pagedata/Home';

const ClientsPage = () => {
    return(
        <ClientSection id="clientLove">
            <Container>
                <ClientLogoLayout>
                    <ClientLogoHolder><ClientLogo>
                        <Img 
                            src={require("../../../assets/"+Clients.ClientLogoDetails[0].ClientLogo)} 
                            alt=""
                            
                        />
                    </ClientLogo></ClientLogoHolder>
                    <ClientLogoHolder><ClientLogo>
                        <Img 
                            src={require("../../../assets/"+Clients.ClientLogoDetails[1].ClientLogo)} 
                            alt=""
                            
                        />
                    </ClientLogo></ClientLogoHolder>
                    <ClientLogoHolder><ClientLogo>
                        <Img 
                            src={require("../../../assets/"+Clients.ClientLogoDetails[2].ClientLogo)} 
                            alt=""
                            
                        />
                    </ClientLogo></ClientLogoHolder>
                    <ClientLogoHolder><ClientLogo>
                        <Img 
                            src={require("../../../assets/"+Clients.ClientLogoDetails[3].ClientLogo)} 
                            alt=""
                            
                        />
                    </ClientLogo></ClientLogoHolder>
                    <ClientLogoHolder><ClientLogo>
                        <Img 
                            src={require("../../../assets/"+Clients.ClientLogoDetails[4].ClientLogo)} 
                            alt=""
                        />
                    </ClientLogo></ClientLogoHolder>
                </ClientLogoLayout>
            </Container>
        </ClientSection>
    );
}

export default ClientsPage;