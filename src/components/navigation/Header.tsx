import { Flex, Button, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Logo from '../assets/logo/Logo';
import {useEffect} from "react";
import {Triforce} from "../FontFamily";

export default function Header() {
  const router = useRouter();

  return (
    <Flex
      mx='auto'
      maxW='8xl'
      alignItems={'center'}
      justifyContent={'space-between'}
      p={{ base: '1.5rem', sm: '2rem', md: '2rem' }}
    >
      <Center
        h='full'
        as='button'
        fontSize={'5xl'}
        onClick={() => router.push('/')}
      >
        {/*<Logo />*/}
      </Center>
      <Button
        as='a'
        pt={{ base: '0.7rem', md: '0.8rem' }}
        target="_blank"
        display={'flex'}
        alignItems='start'
        height={{ base: '2.2rem', md: '2.5rem' }}
        fontSize={{ base: '16px', md: '18px' }}
        fontFamily={Triforce.style.fontFamily}
        lineHeight='14px'
        href="#register"
        className="luma-checkout--button"
      >
        signup
      </Button>
    </Flex>
  );
}
