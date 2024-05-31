import {Container, Heading, Stack} from '@chakra-ui/react';
import {Triforce} from '../FontFamily';
import React from 'react';
import {NewYorkCard, TurkeyCard, LondonCard} from './ImageCard';

const Locations = () => {
    return (
        <Container py={{base:'5rem', md:"6rem"}} maxW='7xl'>
            <Heading
                bgClip={'text'}
                fontFamily={Triforce.style.fontFamily}
                mx='auto'
                maxW='fit-content'
                py='2rem'
                fontSize={{ base: '4xl', md: '6xl' }}
                color={'#8B041D'}
                textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
                bgGradient={`linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%);`}
                fontWeight='800'
            >
                GAME JAM IRL
            </Heading>
            <Stack
                maxW='4xl'
                mx='auto'
                flexWrap={'wrap'}
                alignItems={'center'}
                //  gap={{ base: '0.2rem', md: '1rem' }}
                justify='center'
                gap='1.5rem'
                spacing='0'
                flexDir={{base: 'column', lg: 'row'}}
            >
                <LondonCard/>
                <TurkeyCard/>
                <NewYorkCard/>
            </Stack>
        </Container>
    );
};

export default Locations;
