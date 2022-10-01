import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;


function Footer() {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, facere. Amet quisquam harum aliquid non tempora modi, minima impedit unde tempore fuga id, dicta dolorem odio? Dolorum sit nulla tenetur!</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    );
}

export default Footer;