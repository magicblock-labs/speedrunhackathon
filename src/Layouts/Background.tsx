import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Background = () => {
  return (
    <Center
      position={'relative'}
      overflow='visible'
      h={['1200px', '1200px', '1800px', '1600px', '2400px', '2600px']}
      w={['full']}
    >
      <Center
        zIndex={'-1'}
        w={['1200px', '1200px', '1500px', '1700px', '100vw', '100vw']}
        position='absolute'
        top={['40%', '75%', '60%', '80%', '40%', '45%']}
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Image src='/img.jpg' alt='speedrun' width={2000} height={3147} />
      </Center>
    </Center>
  );
};

export default Background;
