import {Container, Heading, Wrap, WrapItem} from '@chakra-ui/react';
import React from 'react';
import {Inktrap, Triforce} from '../FontFamily';
import Sponsor from './Sponsor';

const sponsorNames = [
    'Solana Foundation',
    'The 76 Devs',
    'Magicblock',
];
const SponsorsSection = () => {
    return (
        <Container
            p='0'
            maxW='6xl'
            display={'flex'}
            flexDirection='column'
            justifyContent={'center'}
            alignItems='center'
        >
            <Heading
                bgClip={'text'}
                fontFamily={Triforce.style.fontFamily}
                mx='auto'
                maxW='fit-content'
                py={{ base: '0', md: '2rem' }}
                fontSize={{ base: '4xl', md: '6xl' }}
                color={'#8B041D'}
                textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
                bgGradient={`linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%);`}
                fontWeight='800'
            >
                SPONSORS
            </Heading>
            <Wrap
                spacing={{base: '1.5rem', md: '3rem'}}
                justify={'center'}
                alignItems='center'
            >
                {sponsorNames.map((sponsorName, key) => (
                    <WrapItem
                        display={'flex'}
                        alignItems='center'
                        justifyContent={'center'}
                        key={key}
                    >
                        <Sponsor sponsorName={sponsorName}/>
                    </WrapItem>
                ))}
            </Wrap>
        </Container>
    );
};

export default SponsorsSection;
