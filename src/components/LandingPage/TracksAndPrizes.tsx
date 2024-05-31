import {
    Center,
    Heading,
    Wrap,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import TracksModalBody from './ModalBody';
import tracksData from '../../data/tracks.json';
import {trackType} from '../../../interfaces/track';
import CardMobile from './CardMobile';
import CardDesktop from './CardDesktop';
import {Triforce} from '../FontFamily';

function getTotalTrackPrize(trackArray: any) {
    let totalTrackPrize = 9000 + 5000 + 2000;
    trackArray.forEach((track: { PrizeWorth: string, PrizeUnit: string }) => {
        if (track.PrizeWorth && track.PrizeUnit.startsWith("USDC")) {
            totalTrackPrize += parseInt(track.PrizeWorth);
        }
    });
    return totalTrackPrize;
}

const TracksAndPrizes = () => {
    const [isMobile] = useMediaQuery('(max-width: 480px)');
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [activeTrack, setActiveTrack] = useState<trackType | {}>({});
    const activeTrackHandler = (track?: trackType) => {
        if (!track) return;
        setActiveTrack(track);
        onOpen();
    };
    return (
        <>
            <Modal
                size={{base: 'full', md: '2xl'}}
                isOpen={isOpen}
                onClose={onClose}
                autoFocus={false}
            >
                <ModalOverlay/>
                <ModalContent
                    rounded={'3xl'}
                    background={'rgba(88, 82, 139, 0.2)'}
                    sx={{
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <ModalBody p='0' bg='transparent'>
                        <TracksModalBody
                            onClose={onClose}
                            track={activeTrack as trackType}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Center flexDirection={'column'} maxW={'4xl'} py={{base:'5rem', md:"6rem"}}>
                <Heading
                    bgClip={'text'}
                    py='2rem'
                    fontFamily={Triforce.style.fontFamily}
                    mx='auto'
                    maxW='fit-content'
                    fontSize={{base: '4xl', md: '6xl'}}
                    color={'#8B041D'}
                    textShadow="0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF, 0 0 1.5px #FFFFFF"
                    bgGradient={`linear-gradient(90deg, #570303 35.03%, #570303 1.2%, #C80404 109.33%);`}
                    fontWeight='800'
                >
                    SPECIAL TRACKS
                </Heading>
                <Wrap
                    w='100%'
                    maxW='100vw'
                    py={{base: '0.5rem', md: '1rem'}}
                    spacing={{base: '0.5rem', md: '1rem'}}
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    fontFamily={Triforce.style.fontFamily}
                    textAlign='center'
                >
                    {tracksData.map((track, index) => {
                        return isMobile ? (
                            <CardMobile track={track as trackType} key={index}/>
                        ) : (
                            <CardDesktop
                                activeTrackHandler={activeTrackHandler}
                                key={index}
                                track={track as trackType}
                            />
                        );
                    })}
                </Wrap>
            </Center>
        </>
    );
};

export default TracksAndPrizes;
