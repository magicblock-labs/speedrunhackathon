import {
    Center,
    Heading,
    Wrap,
} from '@chakra-ui/react';
import React from 'react';
import {Triforce} from '../FontFamily';
import Image from "next/image";

const Judges = () => {

    return (
        <>
            <Center flexDirection={'column'} maxW={'4xl'} py={{base:'1rem', md:"1rem"}}>
                <Heading
                    bgClip={'text'}
                    fontFamily={Triforce.style.fontFamily}
                    mx='auto'
                    maxW='fit-content'
                    py='0rem'
                    fontSize={{ base: '4xl', md: '6xl' }}
                    color={'#8B041D'}
                    textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
                    bgGradient={`linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%);`}
                    fontWeight='800'
                >
                    JUDGES
                </Heading>
                <Wrap
                    w='100%'
                    maxW='100vw'
                    py={{base: '0.5rem', md: '1rem'}}
                    p='2rem'
                    spacing={{base: '0.5rem', md: '1rem'}}
                    direction={'column'}
                    margin={'auto'}
                    justify={'center'}
                    fontSize={{base: '2xl', md: '2xl'}}
                    alignItems='center'
                    fontFamily={Triforce.style.fontFamily}
                    textAlign='center'
                >
                </Wrap>
                <Center mt={{base: '2rem', md: '8rem'}} h={{ base: '5rem', md: '23rem' }} w={{ base: '20rem', md: '50rem' }}>
                    <Image src='/judges.jpg' alt='speedrun' width={1800} height={1800} />
                </Center>
            </Center>
        </>
    );
};

export default Judges;
