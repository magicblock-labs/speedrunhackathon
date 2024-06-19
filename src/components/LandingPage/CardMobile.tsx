import {
  Button,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Inktrap, Triforce } from '../FontFamily';
import { trackType } from '../../../interfaces/track';
import { FiExternalLink } from 'react-icons/fi';
import Sponsor from './Sponsor';

type PropsType = {
  track?: trackType;
};

const CardMobile = ({ track }: PropsType) => {
  const [clicked, setClicked] = useState(false);
  return (
      <WrapItem
          onClick={() => {
            setClicked(!clicked);
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
      >
        <VStack
            overflow="hidden"
            w={{ base: '85vw', sm: '38vw', md: '18rem' }}
            alignItems="center"
            justifyContent="center"
            background="rgba(255, 255, 255, 0.1)"
            sx={{
              backdropFilter: 'blur(14px)',
              margin: '0px !important',
              marginTop: '0px !important',
            }}
            borderRadius="1.2rem"
            p="1.6rem"
            m="0px !important"
        >
          <Heading
              fontWeight="700"
              fontSize={{ base: '2rem', md: '18px' }}
              noOfLines={1}
              fontFamily={Triforce.style.fontFamily}
              textAlign="center"
          >
            {track ? track?.Name : ''}
          </Heading>
          <HStack alignItems="flex-end" justifyContent="center" w="full">
            <Heading
                bgGradient="linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%)"
                bgClip="text"
                fontSize={{ base: '2rem', sm: '2rem', md: '2rem' }}
                fontWeight="700"
                pb={{ base: '0.25rem', md: '0rem' }}
                fontFamily={Triforce.style.fontFamily}
                color={'#8B041D'}
                textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
                textAlign="center"
            >
              {track
                  ? `${track?.PrizeUnit === 'BONK'
                      ? track?.PrizeWorth + 'B'
                      : track?.PrizeUnit === 'BLZE' || track?.PrizeUnit === 'RAIN'
                          ? track?.PrizeWorth + 'm'
                          : track?.PrizeWorth
                              ? `${track.PrizeWorth}`
                              : 'TBA'}`
                  : '00k'}
            </Heading>
            <Text
                pb={{ base: '0', md: '0.3rem' }}
                fontSize={{ base: '2rem', md: '2rem' }}
                pl="1rem"
                fontWeight="600"
                fontFamily={Triforce.style.fontFamily}
                textAlign="center"
            >
              {track ? track?.PrizeUnit : 'USDC'}
            </Text>
          </HStack>
          {clicked && (
              <VStack
                  maxW="full"
                  alignItems="center"
                  justifyContent="center"
                  p="1rem 0rem 2rem 0rem"
                  rounded="2xl"
              >
                <VStack pt="0rem" fontSize="xl" alignItems="center" justifyContent="center">
                  {track?.Sponsor! ? (
                      <HStack gap="1rem" flexWrap="wrap" justifyContent="center">
                        {track.Sponsor?.map((sponsor, index) => (
                            <Sponsor sponsorName={sponsor} key={index} />
                        ))}
                      </HStack>
                  ) : (
                      ''
                  )}
                  <Text
                      fontFamily={Inktrap.style.fontFamily}
                      fontSize={{ base: 'sm', md: 'md' }}
                      alignSelf="center"
                      pt="1rem"
                      textAlign="center"
                  >
                    {track ? track?.Description : ''}
                  </Text>
                  {track?.PrizeDetails?.length! && (
                      <>
                        <Text
                            fontFamily={Inktrap.style.fontFamily}
                            pt="1.4rem"
                            fontWeight="700"
                            fontSize={{ base: 'md', md: 'lg' }}
                            textAlign="center"
                        >
                          Prizes
                        </Text>
                        <UnorderedList
                            fontFamily={Inktrap.style.fontFamily}
                            fontSize={{ base: 'sm', md: 'md' }}
                            pl="1.5rem"
                            textAlign="center"
                        >
                          {track?.PrizeDetails?.map((prizeDetail, index) => (
                              <ListItem maxW="100vw" key={index}>
                                {prizeDetail}
                              </ListItem>
                          ))}
                        </UnorderedList>
                      </>
                  )}
                  {track?.Ideas![0] && (
                      <>
                        <Text
                            pt="1rem"
                            fontFamily={Inktrap.style.fontFamily}
                            fontWeight="700"
                            fontSize={{ base: 'md', md: 'lg' }}
                            textAlign="center"
                        >
                          Ideas
                        </Text>
                        <UnorderedList
                            fontFamily={Inktrap.style.fontFamily}
                            fontSize={{ base: 'sm', md: 'md' }}
                            pl="1.5rem"
                            textAlign="center"
                        >
                          {track.Ideas?.map((idea, index) => (
                              <ListItem key={index}>{idea}</ListItem>
                          ))}
                        </UnorderedList>
                      </>
                  )}
                  <Wrap py="1rem" justifyContent="center">
                    {track?.Links?.map((link, index) => (
                        <WrapItem key={index}>
                          <Button
                              as="a"
                              href={link.Link}
                              target="_blank"
                              fontFamily={Inktrap.style.fontFamily}
                              backdropFilter="blur(10px)"
                              backgroundColor="rgba(255, 255, 255, 0.10)"
                              rounded="full"
                              p="0.35rem 1rem 0rem 1rem"
                              color="white"
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
          )}
        </VStack>
      </WrapItem>
  );
};

export default CardMobile;
