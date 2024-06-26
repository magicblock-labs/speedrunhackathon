import {
    Button,
    Center,
    HStack,
    ListItem,
    Text,
    UnorderedList,
    VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, {useState} from 'react';
import {Triforce} from "../FontFamily";

const NewYorkCard = () => {
    const [hover, setHover] = useState(false);
    return (
        <Center
            rounded='1.2rem'
            position={'relative'}
            overflow='hidden'
            borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
            h={{base: '200px', md: '220px'}}
            w={{base: '85vw', md: '27rem'}}
            _before={{
                content: `" "`,
                position: 'absolute',
                inset: '0',
                borderRadius: '1.2rem',
                padding: '0px',
                WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                MaskComposite: 'exclude',
            }}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            {!hover && (
                <Text
                    mt='auto'
                    mb='1rem'
                    fontWeight={'700'}
                    fontSize={{base: '4xl', md: '6xl'}}
                    fontFamily={Triforce.style.fontFamily}
                >
                    New York
                </Text>
            )}
            {hover && (
                <VStack
                    zIndex={'999'}
                    _before={{
                        content: `" "`,
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '1.2rem',
                        padding: '0px',
                        WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        MaskComposite: 'exclude',
                    }}
                    sx={{
                        backdropFilter: 'blur(12px)',
                    }}
                    h='full'
                    w='full'
                    p={{base: '1rem 2rem', md: '1rem 1.4rem'}}
                    alignItems={'start'}
                    gap={'0.4rem'}
                    rounded='1.2rem'
                >
                    <HStack
                        pt={{base: '0.5rem', md: '0rem'}}
                        justify={'space-between'}
                        w={{base: '70vw', md: '24vw'}}
                        h={{base: 'auto', md: '3rem'}}
                        // overflow='hidden'
                    >
                        <Text fontWeight={'700'} fontSize='lg'>
                            New York
                        </Text>
                        {/*<Center*/}
                        {/*    transform={{base: 'none', md: 'scale(0.5) translateX(-3rem)'}}*/}
                        {/*>*/}
                        {/*    <MetaCamp/>*/}
                        {/*</Center>*/}
                    </HStack>
                    <UnorderedList>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='14'
                                    height='16'
                                    viewBox='0 0 14 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 8.15287C7.48125 8.15287 7.89338 7.99307 8.23638 7.67348C8.57879 7.35443 8.75 6.9707 8.75 6.52229C8.75 6.07389 8.57879 5.68989 8.23638 5.37029C7.89338 5.05124 7.48125 4.89172 7 4.89172C6.51875 4.89172 6.10692 5.05124 5.7645 5.37029C5.4215 5.68989 5.25 6.07389 5.25 6.52229C5.25 6.9707 5.4215 7.35443 5.7645 7.67348C6.10692 7.99307 6.51875 8.15287 7 8.15287ZM7 16C6.88333 16 6.76667 15.9796 6.65 15.9389C6.53333 15.8981 6.43125 15.8437 6.34375 15.7758C4.21458 14.0229 2.625 12.3959 1.575 10.8947C0.525 9.39292 0 7.98981 0 6.68535C0 4.64713 0.703792 3.02335 2.11138 1.81401C3.51838 0.604671 5.14792 0 7 0C8.85208 0 10.4816 0.604671 11.8886 1.81401C13.2962 3.02335 14 4.64713 14 6.68535C14 7.98981 13.475 9.39292 12.425 10.8947C11.375 12.3959 9.78542 14.0229 7.65625 15.7758C7.56875 15.8437 7.46667 15.8981 7.35 15.9389C7.23333 15.9796 7.11667 16 7 16Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>

                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                Register to See Address
                            </Text>
                        </ListItem>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7.99398 1.33301C4.31398 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.31398 14.6663 7.99398 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 7.99398 1.33301ZM10.6673 10.6663C10.6056 10.7281 10.5324 10.7772 10.4517 10.8106C10.3711 10.8441 10.2846 10.8613 10.1973 10.8613C10.11 10.8613 10.0235 10.8441 9.9429 10.8106C9.86225 10.7772 9.78899 10.7281 9.72732 10.6663L7.53398 8.47301C7.47099 8.41126 7.42088 8.33763 7.38655 8.25638C7.35222 8.17513 7.33435 8.08788 7.33398 7.99967V5.33301C7.33398 4.96634 7.63398 4.66634 8.00065 4.66634C8.36732 4.66634 8.66732 4.96634 8.66732 5.33301V7.72634L10.6673 9.72634C10.9273 9.98634 10.9273 10.4063 10.6673 10.6663Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>
                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                Jun 29 - Jul 3
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    <Button
                        as='a'
                        href='https://lu.ma/ovsevw0e'
                        target={'_blank'}
                        pt={'12px'}
                        fontWeight='600'
                    >
                        Register
                        {' ->'}
                    </Button>
                </VStack>
            )}
            <Center
                zIndex={'-1'}
                w={{base: '85vw', md: '27rem'}}
                height={{base: '300px'}}
                position='absolute'
            >
                <Image src={'/newyork.jpg'} height={400} width={555} alt='belgrade'/>
            </Center>
        </Center>
    );
};


const MunichCard = () => {
    const [hover, setHover] = useState(false);
    return (
        <Center
            rounded='1.2rem'
            position={'relative'}
            overflow='hidden'
            borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
            h={{base: '200px', md: '220px'}}
            w={{base: '85vw', md: '27rem'}}
            _before={{
                content: `" "`,
                position: 'absolute',
                inset: '0',
                borderRadius: '1.2rem',
                padding: '0px',
                WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                MaskComposite: 'exclude',
            }}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            {!hover && (
                <Text
                    mt='auto'
                    mb='1rem'
                    fontWeight={'700'}
                    fontSize={{base: '4xl', md: '6xl'}}
                    fontFamily={Triforce.style.fontFamily}
                >
                    Munich
                </Text>
            )}
            {hover && (
                <VStack
                    zIndex={'999'}
                    _before={{
                        content: `" "`,
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '1.2rem',
                        padding: '0px',
                        WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        MaskComposite: 'exclude',
                    }}
                    sx={{
                        backdropFilter: 'blur(12px)',
                    }}
                    h='full'
                    w='full'
                    p={{base: '1rem 2rem', md: '1rem 1.4rem'}}
                    alignItems={'start'}
                    gap={'0.4rem'}
                    rounded='1.2rem'
                >
                    <HStack
                        pt={{base: '0.5rem', md: '0rem'}}
                        justify={'space-between'}
                        w={{base: '70vw', md: '24vw'}}
                        h={{base: 'auto', md: '3rem'}}
                        // overflow='hidden'
                    >
                        <Text fontWeight={'700'} fontSize='lg'>
                            Munich
                        </Text>
                        {/*<Center*/}
                        {/*    transform={{base: 'none', md: 'scale(0.5) translateX(-3rem)'}}*/}
                        {/*>*/}
                        {/*    <MetaCamp/>*/}
                        {/*</Center>*/}
                    </HStack>
                    <UnorderedList>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='14'
                                    height='16'
                                    viewBox='0 0 14 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 8.15287C7.48125 8.15287 7.89338 7.99307 8.23638 7.67348C8.57879 7.35443 8.75 6.9707 8.75 6.52229C8.75 6.07389 8.57879 5.68989 8.23638 5.37029C7.89338 5.05124 7.48125 4.89172 7 4.89172C6.51875 4.89172 6.10692 5.05124 5.7645 5.37029C5.4215 5.68989 5.25 6.07389 5.25 6.52229C5.25 6.9707 5.4215 7.35443 5.7645 7.67348C6.10692 7.99307 6.51875 8.15287 7 8.15287ZM7 16C6.88333 16 6.76667 15.9796 6.65 15.9389C6.53333 15.8981 6.43125 15.8437 6.34375 15.7758C4.21458 14.0229 2.625 12.3959 1.575 10.8947C0.525 9.39292 0 7.98981 0 6.68535C0 4.64713 0.703792 3.02335 2.11138 1.81401C3.51838 0.604671 5.14792 0 7 0C8.85208 0 10.4816 0.604671 11.8886 1.81401C13.2962 3.02335 14 4.64713 14 6.68535C14 7.98981 13.475 9.39292 12.425 10.8947C11.375 12.3959 9.78542 14.0229 7.65625 15.7758C7.56875 15.8437 7.46667 15.8981 7.35 15.9389C7.23333 15.9796 7.11667 16 7 16Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>

                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                Impact Hub Munich
                            </Text>
                        </ListItem>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7.99398 1.33301C4.31398 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.31398 14.6663 7.99398 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 7.99398 1.33301ZM10.6673 10.6663C10.6056 10.7281 10.5324 10.7772 10.4517 10.8106C10.3711 10.8441 10.2846 10.8613 10.1973 10.8613C10.11 10.8613 10.0235 10.8441 9.9429 10.8106C9.86225 10.7772 9.78899 10.7281 9.72732 10.6663L7.53398 8.47301C7.47099 8.41126 7.42088 8.33763 7.38655 8.25638C7.35222 8.17513 7.33435 8.08788 7.33398 7.99967V5.33301C7.33398 4.96634 7.63398 4.66634 8.00065 4.66634C8.36732 4.66634 8.66732 4.96634 8.66732 5.33301V7.72634L10.6673 9.72634C10.9273 9.98634 10.9273 10.4063 10.6673 10.6663Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>
                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >

                                Wednesday, July 3, 2:00 PM - 8:00 PM GMT+2
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    <Button
                        as='a'
                        href='https://lu.ma/xr0gsi7y'
                        target={'_blank'}
                        pt={'12px'}
                        fontWeight='600'
                    >
                        Register
                        {' ->'}
                    </Button>
                </VStack>
            )}
            <Center
                zIndex={'-1'}
                w={{base: '85vw', md: '27rem'}}
                height={{base: '300px'}}
                position='absolute'
            >
                <Image src={'/munich.jpg'} height={400} width={555} alt='belgrade'/>
            </Center>
        </Center>
    );
};

const BerlinCard = () => {
    const [hover, setHover] = useState(false);
    return (
        <Center
            rounded='1.2rem'
            position={'relative'}
            overflow='hidden'
            borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
            h={{base: '200px', md: '220px'}}
            w={{base: '85vw', md: '27rem'}}
            _before={{
                content: `" "`,
                position: 'absolute',
                inset: '0',
                borderRadius: '1.2rem',
                padding: '0px',
                WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                MaskComposite: 'exclude',
            }}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            {!hover && (
                <Text
                    mt='auto'
                    mb='1rem'
                    fontWeight={'700'}
                    fontSize={{base: '4xl', md: '6xl'}}
                    fontFamily={Triforce.style.fontFamily}
                >
                    Berlin
                </Text>
            )}
            {hover && (
                <VStack
                    zIndex={'999'}
                    _before={{
                        content: `" "`,
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '1.2rem',
                        padding: '0px',
                        WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        MaskComposite: 'exclude',
                    }}
                    sx={{
                        backdropFilter: 'blur(12px)',
                    }}
                    h='full'
                    w='full'
                    p={{base: '1rem 2rem', md: '1rem 1.4rem'}}
                    alignItems={'start'}
                    gap={'0.4rem'}
                    rounded='1.2rem'
                >
                    <HStack
                        pt={{base: '0.5rem', md: '0rem'}}
                        justify={'space-between'}
                        w={{base: '70vw', md: '24vw'}}
                        h={{base: 'auto', md: '3rem'}}
                        // overflow='hidden'
                    >
                        <Text fontWeight={'700'} fontSize='lg'>
                            Berlin
                        </Text>
                        {/*<Center*/}
                        {/*    transform={{base: 'none', md: 'scale(0.5) translateX(-3rem)'}}*/}
                        {/*>*/}
                        {/*    <MetaCamp/>*/}
                        {/*</Center>*/}
                    </HStack>
                    <UnorderedList>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='14'
                                    height='16'
                                    viewBox='0 0 14 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 8.15287C7.48125 8.15287 7.89338 7.99307 8.23638 7.67348C8.57879 7.35443 8.75 6.9707 8.75 6.52229C8.75 6.07389 8.57879 5.68989 8.23638 5.37029C7.89338 5.05124 7.48125 4.89172 7 4.89172C6.51875 4.89172 6.10692 5.05124 5.7645 5.37029C5.4215 5.68989 5.25 6.07389 5.25 6.52229C5.25 6.9707 5.4215 7.35443 5.7645 7.67348C6.10692 7.99307 6.51875 8.15287 7 8.15287ZM7 16C6.88333 16 6.76667 15.9796 6.65 15.9389C6.53333 15.8981 6.43125 15.8437 6.34375 15.7758C4.21458 14.0229 2.625 12.3959 1.575 10.8947C0.525 9.39292 0 7.98981 0 6.68535C0 4.64713 0.703792 3.02335 2.11138 1.81401C3.51838 0.604671 5.14792 0 7 0C8.85208 0 10.4816 0.604671 11.8886 1.81401C13.2962 3.02335 14 4.64713 14 6.68535C14 7.98981 13.475 9.39292 12.425 10.8947C11.375 12.3959 9.78542 14.0229 7.65625 15.7758C7.56875 15.8437 7.46667 15.8981 7.35 15.9389C7.23333 15.9796 7.11667 16 7 16Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>

                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                July 2, 2:00 PM - Jul 3, 8:00 PM
                            </Text>
                        </ListItem>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7.99398 1.33301C4.31398 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.31398 14.6663 7.99398 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 7.99398 1.33301ZM10.6673 10.6663C10.6056 10.7281 10.5324 10.7772 10.4517 10.8106C10.3711 10.8441 10.2846 10.8613 10.1973 10.8613C10.11 10.8613 10.0235 10.8441 9.9429 10.8106C9.86225 10.7772 9.78899 10.7281 9.72732 10.6663L7.53398 8.47301C7.47099 8.41126 7.42088 8.33763 7.38655 8.25638C7.35222 8.17513 7.33435 8.08788 7.33398 7.99967V5.33301C7.33398 4.96634 7.63398 4.66634 8.00065 4.66634C8.36732 4.66634 8.66732 4.96634 8.66732 5.33301V7.72634L10.6673 9.72634C10.9273 9.98634 10.9273 10.4063 10.6673 10.6663Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>
                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                w3.hub
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    <Button
                        as='a'
                        href='https://lu.ma/brcluou7'
                        target={'_blank'}
                        pt={'12px'}
                        fontWeight='600'
                    >
                        Register
                        {' ->'}
                    </Button>
                </VStack>
            )}
            <Center
                zIndex={'-1'}
                w={{base: '85vw', md: '27rem'}}
                height={{base: '300px'}}
                position='absolute'
            >
                <Image src={'/berlin.jpg'} height={400} width={555} alt='belgrade'/>
            </Center>
        </Center>
    );
};

const TurkeyCard = () => {
    const [hover, setHover] = useState(false);
    return (
        <Center
            rounded='1.2rem'
            position={'relative'}
            overflow='hidden'
            borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
            h={{base: '200px', md: '220px'}}
            w={{base: '85vw', md: '27rem'}}
            _before={{
                content: `" "`,
                position: 'absolute',
                inset: '0',
                borderRadius: '1.2rem',
                padding: '0px',
                WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                MaskComposite: 'exclude',
            }}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            {!hover && (
                <Text
                    mt='auto'
                    mb='1rem'
                    fontWeight={'700'}
                    fontSize={{base: '4xl', md: '6xl'}}
                    fontFamily={Triforce.style.fontFamily}
                >
                    Istanbul
                </Text>
            )}
            {hover && (
                <VStack
                    zIndex={'999'}
                    _before={{
                        content: `" "`,
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '1.2rem',
                        padding: '0px',
                        WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        MaskComposite: 'exclude',
                    }}
                    sx={{
                        backdropFilter: 'blur(12px)',
                    }}
                    h='full'
                    w='full'
                    p={{base: '1rem 2rem', md: '1rem 1.4rem'}}
                    alignItems={'start'}
                    gap={'0.4rem'}
                    rounded='1.2rem'
                >
                    <HStack
                        pt={{base: '0.5rem', md: '0rem'}}
                        justify={'space-between'}
                        w={{base: '70vw', md: '24vw'}}
                        h={{base: 'auto', md: '3rem'}}
                        // overflow='hidden'
                    >
                        <Text fontWeight={'700'} fontSize='lg'>
                            Istanbul
                        </Text>
                        {/*<Center*/}
                        {/*    transform={{base: 'none', md: 'scale(0.5) translateX(-3rem)'}}*/}
                        {/*>*/}
                        {/*    <MetaCamp/>*/}
                        {/*</Center>*/}
                    </HStack>
                    <UnorderedList>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='14'
                                    height='16'
                                    viewBox='0 0 14 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 8.15287C7.48125 8.15287 7.89338 7.99307 8.23638 7.67348C8.57879 7.35443 8.75 6.9707 8.75 6.52229C8.75 6.07389 8.57879 5.68989 8.23638 5.37029C7.89338 5.05124 7.48125 4.89172 7 4.89172C6.51875 4.89172 6.10692 5.05124 5.7645 5.37029C5.4215 5.68989 5.25 6.07389 5.25 6.52229C5.25 6.9707 5.4215 7.35443 5.7645 7.67348C6.10692 7.99307 6.51875 8.15287 7 8.15287ZM7 16C6.88333 16 6.76667 15.9796 6.65 15.9389C6.53333 15.8981 6.43125 15.8437 6.34375 15.7758C4.21458 14.0229 2.625 12.3959 1.575 10.8947C0.525 9.39292 0 7.98981 0 6.68535C0 4.64713 0.703792 3.02335 2.11138 1.81401C3.51838 0.604671 5.14792 0 7 0C8.85208 0 10.4816 0.604671 11.8886 1.81401C13.2962 3.02335 14 4.64713 14 6.68535C14 7.98981 13.475 9.39292 12.425 10.8947C11.375 12.3959 9.78542 14.0229 7.65625 15.7758C7.56875 15.8437 7.46667 15.8981 7.35 15.9389C7.23333 15.9796 7.11667 16 7 16Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>

                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                İstanbul, Planeth
                            </Text>
                        </ListItem>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7.99398 1.33301C4.31398 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.31398 14.6663 7.99398 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 7.99398 1.33301ZM10.6673 10.6663C10.6056 10.7281 10.5324 10.7772 10.4517 10.8106C10.3711 10.8441 10.2846 10.8613 10.1973 10.8613C10.11 10.8613 10.0235 10.8441 9.9429 10.8106C9.86225 10.7772 9.78899 10.7281 9.72732 10.6663L7.53398 8.47301C7.47099 8.41126 7.42088 8.33763 7.38655 8.25638C7.35222 8.17513 7.33435 8.08788 7.33398 7.99967V5.33301C7.33398 4.96634 7.63398 4.66634 8.00065 4.66634C8.36732 4.66634 8.66732 4.96634 8.66732 5.33301V7.72634L10.6673 9.72634C10.9273 9.98634 10.9273 10.4063 10.6673 10.6663Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>
                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >

                            </Text>
                        </ListItem>
                    </UnorderedList>
                    <Button
                        as='a'
                        href='https://docs.google.com/forms/d/e/1FAIpQLScwkMl9E5i1HDL6qA-fPCVpX_L706MQNL9Gt3fZ1IvxuImylA/viewform'
                        target={'_blank'}
                        pt={'12px'}
                        fontWeight='600'
                    >
                        Register
                        {' ->'}
                    </Button>
                </VStack>
            )}
            <Center
                zIndex={'-1'}
                w={{base: '85vw', md: '27rem'}}
                height={{base: '300px'}}
                position='absolute'
            >
                <Image src={'/turkey.jpg'} height={400} width={555} alt='belgrade'/>
            </Center>
        </Center>
    );
};

const LondonCard = () => {
    const [hover, setHover] = useState(false);
    return (
        <Center
            rounded='1.2rem'
            position={'relative'}
            overflow='hidden'
            borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
            h={{base: '200px', md: '220px'}}
            w={{base: '85vw', md: '27rem'}}
            _before={{
                content: `" "`,
                position: 'absolute',
                inset: '0',
                borderRadius: '1.2rem',
                padding: '0px',
                WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                MaskComposite: 'exclude',
            }}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            {!hover && (
                <Text
                    mt='auto'
                    mb='1rem'
                    fontWeight={'700'}
                    fontSize={{base: '4xl', md: '6xl'}}
                    fontFamily={Triforce.style.fontFamily}
                >
                    London
                </Text>
            )}
            {hover && (
                <VStack
                    zIndex={'999'}
                    _before={{
                        content: `" "`,
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '1.2rem',
                        padding: '0px',
                        WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        MaskComposite: 'exclude',
                    }}
                    sx={{
                        backdropFilter: 'blur(12px)',
                    }}
                    h='full'
                    w='full'
                    p={{base: '1rem 2rem', md: '1rem 1.4rem'}}
                    alignItems={'start'}
                    gap={'0.4rem'}
                    rounded='1.2rem'
                >
                    <HStack
                        pt={{base: '0.5rem', md: '0rem'}}
                        justify={'space-between'}
                        w={{base: '70vw', md: '24vw'}}
                        h={{base: 'auto', md: '3rem'}}
                        // overflow='hidden'
                    >
                        <Text fontWeight={'700'} fontSize='lg'>
                            London
                        </Text>
                        {/*<Center*/}
                        {/*    transform={{base: 'none', md: 'scale(0.5) translateX(-3rem)'}}*/}
                        {/*>*/}
                        {/*    <MetaCamp/>*/}
                        {/*</Center>*/}
                    </HStack>
                    <UnorderedList>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='14'
                                    height='16'
                                    viewBox='0 0 14 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 8.15287C7.48125 8.15287 7.89338 7.99307 8.23638 7.67348C8.57879 7.35443 8.75 6.9707 8.75 6.52229C8.75 6.07389 8.57879 5.68989 8.23638 5.37029C7.89338 5.05124 7.48125 4.89172 7 4.89172C6.51875 4.89172 6.10692 5.05124 5.7645 5.37029C5.4215 5.68989 5.25 6.07389 5.25 6.52229C5.25 6.9707 5.4215 7.35443 5.7645 7.67348C6.10692 7.99307 6.51875 8.15287 7 8.15287ZM7 16C6.88333 16 6.76667 15.9796 6.65 15.9389C6.53333 15.8981 6.43125 15.8437 6.34375 15.7758C4.21458 14.0229 2.625 12.3959 1.575 10.8947C0.525 9.39292 0 7.98981 0 6.68535C0 4.64713 0.703792 3.02335 2.11138 1.81401C3.51838 0.604671 5.14792 0 7 0C8.85208 0 10.4816 0.604671 11.8886 1.81401C13.2962 3.02335 14 4.64713 14 6.68535C14 7.98981 13.475 9.39292 12.425 10.8947C11.375 12.3959 9.78542 14.0229 7.65625 15.7758C7.56875 15.8437 7.46667 15.8981 7.35 15.9389C7.23333 15.9796 7.11667 16 7 16Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>

                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                Shoreditch Exchange
                            </Text>
                        </ListItem>
                        <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                            <Center>
                                <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7.99398 1.33301C4.31398 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.31398 14.6663 7.99398 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 7.99398 1.33301ZM10.6673 10.6663C10.6056 10.7281 10.5324 10.7772 10.4517 10.8106C10.3711 10.8441 10.2846 10.8613 10.1973 10.8613C10.11 10.8613 10.0235 10.8441 9.9429 10.8106C9.86225 10.7772 9.78899 10.7281 9.72732 10.6663L7.53398 8.47301C7.47099 8.41126 7.42088 8.33763 7.38655 8.25638C7.35222 8.17513 7.33435 8.08788 7.33398 7.99967V5.33301C7.33398 4.96634 7.63398 4.66634 8.00065 4.66634C8.36732 4.66634 8.66732 4.96634 8.66732 5.33301V7.72634L10.6673 9.72634C10.9273 9.98634 10.9273 10.4063 10.6673 10.6663Z'
                                        fill='white'
                                    />
                                </svg>
                            </Center>
                            <Text
                                fontWeight={'600'}
                                pt='0.3rem'
                                fontSize={{base: 'sm', md: 'sm'}}
                            >
                                Open 24/7 Mon-Sun - 17th June to 4th July
                            </Text>
                        </ListItem>
                    </UnorderedList>
                    <Button
                        as='a'
                        href='https://lu.ma/london-startup-village?tk=IzyeCe'
                        target={'_blank'}
                        pt={'12px'}
                        fontWeight='600'
                    >
                        Register
                        {' ->'}
                    </Button>
                </VStack>
            )}
            <Center
                zIndex={'-1'}
                w={{base: '85vw', md: '27rem'}}
                height={{base: '300px'}}
                position='absolute'
            >
                <Image src={'/london.jpg'} height={400} width={555} alt='belgrade'/>
            </Center>
        </Center>
    );
};

export {TurkeyCard, LondonCard, NewYorkCard, MunichCard, BerlinCard};
