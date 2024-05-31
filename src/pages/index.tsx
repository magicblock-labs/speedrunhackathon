import SEO from '../components/SEO/index';
import config from '../../config/general.config';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import TracksAndPrizes from '../components/LandingPage/TracksAndPrizes';
import {Triforce} from '../components/FontFamily';
import { FaDiscord } from 'react-icons/fa';
import HeadingTotalPrize from "../components/LandingPage/HeadingTotalPrize";
import PresentedBy from "../components/LandingPage/PresentedBy";
import FAQ from "../components/LandingPage/FAQ";
import Image from "next/image";
import Game from "../components/LandingPage/Game";
import Resources from "../components/LandingPage/Resources";
import GrandPrize from "../components/LandingPage/GrandPrize";
import SponsorsSection from "../components/LandingPage/SponsorsSection";
import Locations from "../components/Locations/Locations";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('track');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} is a virtual hackathon organized by 76Devs and Magicblock from June 29th - July 5th, 2024.`}
        image={`https://solanaspeedrun.com/speedrun.jpg`}
      />
      <Container maxW={'8xl'} p='0' >
        <VStack
          py={['8vh', '5rem', '8rem', '8rem', '6rem']}
          mx='auto'
          pl='2rem'
          pr='2rem'
          maxW={['26rem', '26rem', '40rem', '60rem']}
        >
          <Heading
            fontSize={['5xl', '6xl', '7xl', '7xl', '8xl']}
            lineHeight={['58px', '72px', '90px', '130px', '130px']}
            textAlign={'center'}
            fontWeight={'800'}
            fontFamily={Triforce.style.fontFamily}
          >
            {/*<Box as='span'>Speedrun</Box>*/}
            <Image src='./speedrun.svg' alt="Speedrun" width='900' height='500' />
          </Heading>
          <Text
            px='1rem'
            pt={{ base: '1rem', md: '3rem' }}
            fontSize={{ base: '2.5rem', md: '4.5rem' }}
            fontWeight='500'
            maxW='6xl'
            fontFamily={Triforce.style.fontFamily}
            textAlign={'center'}
            color={'#8B041D'}
            lineHeight='4rem'
            textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
          >
            game jam{' '}
            <br/>
            <Box
                as='span'
                color={'white'}
                textShadow="none"
                fontSize={{ base: '2rem', md: '3rem' }}
            >
              June 29th - July 5th
            </Box>{' '}
          </Text>
          <HStack
            mx='auto'
            w='full'
            gap={{ base: '0.1rem', md: '0.5rem' }}
            alignItems={'center'}
            justifyContent='center'
            pt={'3rem'}
          >
            <Button
                pt={{ base: '0.4rem', md: '0.4rem' }}
              display={'flex'}
              alignItems='start'
              justifyContent={'center'}
              fontFamily={Triforce.style.fontFamily}
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight='1.7rem'
              variant='gradient'
             // onClick={handleClickScroll}
              as='a'
              href='https://lu.ma/2ilus9cr'
              target={'_blank'}
            >
              signup
            </Button>
            <Button
              as='a'
              href='https://discord.gg/tEmz8FHAAa'
              target={'_blank'}
              pt={{ base: '0.4rem', md: '0.4rem' }}
              display={'flex'}
              alignItems='start'
              justifyContent={'center'}
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight='1.7rem'
              fontFamily={Triforce.style.fontFamily}
              rightIcon={<FaDiscord />}
            >
              discord
            </Button>
          </HStack>
        </VStack>
        <Center>
          <PresentedBy />
        </Center>
        <Center py='12rem' px={{ base: '2rem', md: '3rem', lg: '5rem' }}>
          <GrandPrize />
        </Center>
        <Center>
          <HeadingTotalPrize />
        </Center>
        {/*<Center pb='10rem' id='track'>*/}
        {/*  {BrowserName() === 'firefox' ? '' : <MainTracks />}*/}
        {/*</Center>*/}
        <Center>
          <TracksAndPrizes />
        </Center>
        <Center>
          <Locations />
        </Center>
        <Center>
          <Resources />
        </Center>
        <Center>
          <FAQ />
        </Center>
        <Center py={{ base: '2rem', md: '12rem' }} px={{ base: '2rem', md: '3rem', lg: '5rem' }}>
          <SponsorsSection />
        </Center>
        <Center>
          <Game />
        </Center>

      </Container>
    </>
  );
}
