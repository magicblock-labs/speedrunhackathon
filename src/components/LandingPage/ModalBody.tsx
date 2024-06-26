import {
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  ListItem,
  UnorderedList,
  WrapItem,
  Wrap,
  Button,
  IconButton,
  ListIcon,
} from '@chakra-ui/react';
import React from 'react';
import {Inktrap, Triforce} from '../FontFamily';
import { trackType } from '../../../interfaces/track';
import Sponsor from './Sponsor';
import { FiExternalLink } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

const TracksModalBody = ({
  track,
  onClose,
}: {
  track: trackType;
  onClose: any;
}) => {
  return (
    <VStack
      maxW={'full'}
      alignItems={'start'}
      p='2.5rem 2rem 2rem 2rem'
      rounded='2xl'
      overflow={'hidden'}
    >
      <HStack
        overflow={'hidden'}
        w='full'
        justifyContent={'space-between'}
        alignItems='center'
      >
        <Heading
          pt='0.5rem'
          fontFamily={Triforce.style.fontFamily}
          fontSize={{ base: '28px', md: '36px' }}
        >
          {track ? track?.Name : ''}
        </Heading>
        <IconButton
          onClick={() => {
            onClose();
          }}
          cursor='pointer'
          transition='all 0.5s'
          variant={'unstyled'}
          width={{ base: '1rem', md: '1.4rem' }}
          height={{ base: '1rem', md: '1.4rem' }}
          as={RxCross1}
          aria-label={'cancel'}
        />
      </HStack>
      <HStack
        pt='1rem'
        gap={'1rem'}
        alignItems={'end'}
        justifyContent={'space-between'}
      >
        <Heading
          bgGradient={
            'linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%)'
          }
          fontFamily={Triforce.style.fontFamily}
          bgClip={'text'}
          lineHeight={'70px'}
          fontSize={{ base: '44px', md: '52px' }}
          color={'#8B041D'}
          textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
          fontWeight='700'
        >
          {track
            ? `${
                track?.PrizeUnit === 'BONK'
                  ? track?.PrizeWorth + 'B'
                  : track?.PrizeUnit === 'BLZE' || track?.PrizeUnit === 'RAIN'?
                  (track?.PrizeWorth + 'm')
                  : track?.PrizeWorth
              }`
            : '00k'}
        </Heading>
        <Text
            fontSize={{ base: '16px', md: '1.5rem' }}
            pb='0.5rem'
            fontWeight={'600'}
            fontFamily={Triforce.style.fontFamily}
        >
          {track ? `${track?.PrizeUnit}` : 'USDC'}
        </Text>
      </HStack>
      <VStack pt={'1rem'} fontSize='xl' alignItems={'start'}>
        {track.Sponsor ? (
          <HStack flexWrap={'wrap'} spacing='2rem' mb="1rem">
            {track.Sponsor?.map((sponsor, index) => (
              <Sponsor sponsorName={sponsor} key={index} />
            ))}
          </HStack>
        ) : (
          ''
        )}
        <Text
          fontFamily={Inktrap.style.fontFamily}
          fontSize={{ base: '1rem', md: '1.5rem' }}
          pt='0.4rem'
        >
          {track ? track?.Description : ''}
        </Text>
        {track.PrizeDetails?.length! && (
          <>
            <Text
              fontFamily={Inktrap.style.fontFamily}
              pt='1.4rem'
              fontWeight={'700'}
              fontSize={{ base: 'md', md: 'lg' }}
            >
              Prizes
            </Text>
            <UnorderedList
              fontFamily={Inktrap.style.fontFamily}
              fontSize={{ base: 'sm', md: 'md' }}
              pl='1.5rem'
            >
              {track.PrizeDetails?.map((prizeDetail, index) => (
                <ListItem maxW='100vw' key={index}>
                  {prizeDetail}
                </ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        {track.Ideas![0] && (
          <>
            <Text
              pt='1rem'
              fontFamily={Inktrap.style.fontFamily}
              fontWeight={'700'}
              fontSize={{ base: 'md', md: 'lg' }}
            >
              Ideas
            </Text>
            <UnorderedList
              fontFamily={Inktrap.style.fontFamily}
              fontSize={{ base: 'sm', md: 'md' }}
              pl='1.5rem'
            >
              {track.Ideas?.map((idea, index) => (
                <ListItem key={index}>{idea}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        {track.Requirements && (
          <>
            <VStack alignItems='start'>
              <Text
                pt='1rem'
                fontFamily={Inktrap.style.fontFamily}
                fontWeight={'700'}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Requirements
              </Text>
              <Text
                fontFamily={Inktrap.style.fontFamily}
                fontSize={{ base: 'sm', md: 'md' }}
                pl='1.5rem'
              >
                {track?.Requirements}
              </Text>
            </VStack>
          </>
        )}
        {track.Judges![0] && (
          <VStack alignItems='start'>
          <Text
            fontFamily={Inktrap.style.fontFamily}
            pt='1.4rem'
            fontWeight={'700'}
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Judges
          </Text>
          <UnorderedList
            fontFamily={Inktrap.style.fontFamily}
            fontSize={{ base: 'sm', md: 'md' }}
            pl='1.5rem'
          >
            {track.Judges?.map((Judge, index) => (
              <ListItem maxW='100vw' key={index}>
                {Judge.Name}
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
        )}
        <Wrap py='1rem'>
          {track?.Links?.map((link, index) => (
            <WrapItem key={index}>
              <Button
                as='a'
                href={link.Link}
                target={'_blank'}
                fontFamily={Inktrap.style.fontFamily}
                backdropFilter='blur(10px)'
                backgroundColor='rgba(255, 255, 255, 0.10)'
                rounded={'full'}
                p='0.35rem 1rem 0rem 1rem'
                color='white'
                fontSize={{ base: 'xs', md: 'sm' }}
                rightIcon={
                  <FiExternalLink
                    style={{
                      transform: 'translateY(-4px)',
                      width: '12px',
                    }}
                  />
                }
              >
                {link.Title}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </VStack>
  );
};
export default TracksModalBody;
