import {
  Button,
  Center,
  Heading,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import {Inktrap, Triforce} from '../FontFamily';
import {FiExternalLink} from "react-icons/fi";
import Image from "next/image";

const GrandPrize = () => {

  return (
    <>
      <Center flexDirection={'column'} maxW={'4xl'} py='4rem'>
        <Heading
            bgGradient={`linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%);`}
            bgClip={'text'}
            py='2rem'
            fontFamily={Triforce.style.fontFamily}
            mx='auto'
            color={'#8B041D'}
            text-stroke='10px #FFFFFF'
            maxW='fit-content'
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='800'
            textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
            //text-shadow="-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF"
        >
          UNSTOPPABLE GAMES
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
            fontSize={{base: '3xl', md: '3xl'}}
            fontFamily={Triforce.style.fontFamily}
            alignItems='center'
            textAlign='center'
        >

          <div>
            Learn how to build <a target={'_blank'} href={'https://docs.magicblock.gg/Forever%20Games'}  style={{color: 'inherit', textDecoration: 'none'}} onMouseOver={e => e.currentTarget.style.color = '#F00000'} onMouseOut={e => e.currentTarget.style.color = 'inherit'} rel="noreferrer">unstoppable games</a>
          </div>
          <div>
            to be eligible for the main track prizes
          </div>

          <br/>
          <br/>
          PRIZES <br/>
          <ul style={{listStyleType: 'none'}}>
            <li>1st Place: $5,000</li>
            <li>2nd Place: $3,000</li>
            <li>3rd Place: $2,000</li>
          </ul>

        </Wrap>
        <Center mt={{base: '3rem', md: '6rem'}} h={{base: '3rem', md: '4rem'}} w={{base: '12rem', md: '20rem'}}>
          <Image src='/spaceships.png' alt='speedrun' width={800} height={800} />
        </Center>
      </Center>
    </>
  );
};

export default GrandPrize;
