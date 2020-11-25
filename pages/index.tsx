import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Text, Box, Flex } from 'rimble-ui';
import Container from '../components/Container/Container';
import Column from '../components/Column/Column';
import CustomHeading from '../components/CustomHeading/CustomHeading';
import CustomButton from '../components/CustomButton/CustomButton';

import Layout from '../layout/MainLayout/Layout';
import FeatureBox from '../components/FeatureBox/FeatureBox';
import Call2Action from '../components/Call2Action/Call2Action';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import MultiProgressBar from '../components/ProgressBar/MultiProgressBar';
import Checkbox from '../components/Checkbox/Checkbox';
import TabBox from '../components/TabBox/TabBox';
import logos from '../assets/images/logos.png';
import CalculatedText from '../components/CalculatedText/CalculatedText';
import getTimeRemaining from '../utils/getTimeRemaining';

// Images
import rubix from '../assets/images/rubix.png';
import connect from '../assets/images/connect.png';
import connectx from '../assets/images/connectx.png';
import { setInterval } from 'timers';

// Styed components styles
const HeroSection = styled.section`
    display: flex;
    align-items: center;
    padding-top: 180px;
    padding-bottom: 100px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.background.secondary};
    @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
        min-height: 450px;
        max-height: 700px;
        height: 100vh;
        text-align: left;
    }
    @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
        min-height: 768px;
        max-height: 1080px;
    }
`;

const DetailsList = styled.ul`
    margin: 0;
    padding: 10px 0;
    list-style: none;
    position: relative;
    z-index: 1;
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50%;
        background-color: ${(props) => props.rightBg || '#f5f5f5'};
        content: '';
        z-index: -1;
        border-radius: 19px;
        display: none;
        @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
            display: block;
        }
    }
    li {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 0;
    }
    li:not(:last-child) {
        margin-bottom: 20px;
        @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
            margin-bottom: 0;
        }
    }
    li div {
        width: 100%;
        @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
            width: 50%;
        }
    }
    li > div:nth-child(2) {
        margin-top: 15px;
        @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
            margin-top: 0;
            padding: 0 20px;
        }
    }
    li .multiple {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    li .multiple div {
        width: 50%;
    }
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
    margin-right: 25px;
    border: none;
    text-align: center;
    border-bottom: 3px solid #000;
    padding: 10px;
    &:focus {
        outline: none;
    }
    @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
        margin-bottom: 0;
        width: 115px;
    }
`;

// count Down Date
// year, month[0-11], day, hour , minute , second
const endTime = new Date(2020, 10, 27, 20, 10, 0);
const Home = () => {
    const bottomMinusBoxRef = useRef(null);
    const topMinusBoxRef = useRef(null);
    const callToActionRef = useRef(null);
    const [bottomMinusBoxHeight, setBottomMinusBoxHeight] = useState(0);
    const [topMinusBoxHeight, setTopMinusBoxHeight] = useState(0);
    const [callToActionHeight, setCallToActionHeight] = useState(0);
    const [countDown, setCountDown] = useState(getTimeRemaining(endTime));

    // Calcs values
    const [calcValue, setCalcValue] = useState(0);

    const calcOnChange = (e) => setCalcValue(e.target.value);

    useEffect(() => {
        const timeoutId = setInterval(() => {
            setCountDown(getTimeRemaining(endTime));
        }, 1000);

        return () => clearInterval(timeoutId);
    }, []);

    useEffect(() => {
        setBottomMinusBoxHeight(bottomMinusBoxRef.current?.scrollHeight);
        setTopMinusBoxHeight(topMinusBoxRef.current?.scrollHeight);
        setCallToActionHeight(callToActionRef.current?.scrollHeight);
    }, [bottomMinusBoxRef, topMinusBoxRef, callToActionRef]);
    return (
        <Layout>
            {/* ==================================================================================
            ============ Hero section 
            ======================================================================================*/}
            <HeroSection>
                <Container>
                    <Column width={[1, 1, 10 / 12, 6 / 12]}>
                        <div>
                            <CustomHeading
                                as={'h1'}
                                lineHeight={'copy'}
                                mb={[8]}
                            >
                                Welcome to CONNECTx Project
                            </CustomHeading>
                            <Text.p lineHeight={1.7} fontSize={[0, 0, 2]}>
                                Stake Connect, Connectx, Rubix UNI-LP tokens to
                                claim your very own CONNECTx tokens!🚀
                            </Text.p>
                            <Text.p lineHeight={4} fontSize={[0, 0, 1]}>
                                🏆Tip: CONNECTx Liquidity mining yields 118%.
                            </Text.p>
                            <CustomButton mt={[8]}>
                                🦄 See the pools
                            </CustomButton>
                        </div>
                    </Column>
                    <Column
                        width={[1, 1, 2 / 12, 6 / 12]}
                        textAlign="right"
                        display={['none', 'none', 'none', 'flex']}
                        flexWrap="wrap"
                        alignItems="baseline"
                    >
                        <Box
                            as="img"
                            src={logos}
                            alt="logo"
                            width="auto"
                            height="auto"
                            maxWidth="100%"
                        />
                    </Column>
                </Container>
            </HeroSection>

            {/* ==================================================================================
            ============ About us section
            ======================================================================================*/}
            <Box
                as={'section'}
                py={['50px', '50px', '100px']}
                bg={'background.secondarySemiDark'}
            >
                <Container>
                    <Column width={1}>
                        <CustomHeading as={'h1'} mb={['30px', '30px', '50px']}>
                            Tokens list
                        </CustomHeading>
                    </Column>
                    <Column width={[1, 1, 1, 6 / 12]}>
                        <Box>
                            <TabBox
                                title="Rubix (RBX)"
                                img={rubix}
                                wrapperProps={{
                                    mt: '20px',
                                }}
                            >
                                <CustomHeading
                                    as={'h3'}
                                    fontWeight={400}
                                    mb={1}
                                >
                                    Contract address
                                </CustomHeading>
                                <Text.p
                                    m={0}
                                    color={'#A3A3A3'}
                                    fontSize={[0, 0, 1]}
                                >
                                    0xefE556aE20c768fE9E1705E1cD0dda2264EEc3C3
                                </Text.p>
                            </TabBox>
                            <TabBox
                                title="Connect (CT)"
                                img={connect}
                                wrapperProps={{
                                    mt: '20px',
                                }}
                            >
                                <CustomHeading
                                    as={'h3'}
                                    fontWeight={400}
                                    mb={1}
                                >
                                    Contract address
                                </CustomHeading>
                                <Text.p
                                    m={0}
                                    color={'#A3A3A3'}
                                    fontSize={[0, 0, 1]}
                                >
                                    0x9deEA77B686B2a80f8764013F7E7f38fB811baED
                                </Text.p>
                            </TabBox>
                            <TabBox
                                title="CONNECTx (CTx)"
                                img={connectx}
                                wrapperProps={{
                                    mt: '20px',
                                }}
                            >
                                <CustomHeading
                                    as={'h3'}
                                    fontWeight={400}
                                    mb={1}
                                >
                                    Contract address
                                </CustomHeading>
                                <Text.p
                                    m={0}
                                    color={'#A3A3A3'}
                                    fontSize={[0, 0, 2]}
                                >
                                    Will be updated upon deployment.
                                </Text.p>
                            </TabBox>
                        </Box>
                    </Column>
                    <Column
                        width={[1, 1, 1, 5 / 12]}
                        ml={['auto']}
                        mt={['20px', '20px', '20px']}
                    >
                        <Text.p mt={0} fontSize={[0, 0, 2]}>
                            CONNECTx and Connect are DAO tokens and governed by community. CONNECTx is only obtainable through liquidity mining.
                        </Text.p>
                        <Text.p mt={0} fontSize={[0, 0, 2]}>
                        Every member who has enough tokens to vote can influence and suggest ideas which will have an impact on the network.
                        </Text.p>
                    </Column>
                </Container>
            </Box>

            {/* ==================================================================================
            ============ Feature section
            ======================================================================================*/}
            <Box
                as={'section'}
                pt={['50px', '50px', '100px']}
                bg={'background.primaryDeepLight'}
                color={'textSecondary'}
            >
                <Container>
                    <Flex
                        my={['-15px', '-15px', '-20px']}
                        mx={'-10px'}
                        flexWrap={'wrap'}
                        width={'100%'}
                    >
                        {/* {features.map((feature, index) => (
                            <Column width={[1, 1, 1, 6 / 12]} key={index}>
                                <FeatureBox
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </Column>
                        ))} */}
                        <Column width={[1, 1, 1, 6 / 12]}>
                            <FeatureBox
                                title="Total RBX Liquidity"
                                description="0 RBX"
                                img={rubix}
                            />
                        </Column>
                        <Column width={[1, 1, 1, 6 / 12]}>
                            <FeatureBox
                                title="Total CT Liquidity"
                                description="0 CT"
                                img={connect}
                            />
                        </Column>
                        <Column width={[1, 1, 1, 6 / 12]}>
                            <FeatureBox
                                title="Total CTx Liquidity"
                                description="0 CTx"
                                img={connectx}
                            />
                        </Column>
                        <Column width={[1, 1, 1, 6 / 12]}>
                            <FeatureBox
                                title="Total CTx Supply"
                                description="0 CTx"
                                img={connectx}
                            />
                        </Column>
                    </Flex>
                </Container>
                {/* Call to action  */}
                <Box ref={callToActionRef}>
                    <Container
                        mt={['50px', '50px', '100px']}
                        mb={-callToActionHeight / 2 + 'px'}
                    >
                        <Column width={12 / 12}>
                            <Call2Action />
                        </Column>
                    </Container>
                </Box>
            </Box>
            {/* ==================================================================================
            ============ current circulating supply section 
            ======================================================================================*/}
            <Box
                as={'section'}
                bg={'#BAC4BF'}
                color={'textSecondary'}
                pt={[
                    50 + callToActionHeight / 2 + 'px',
                    50 + callToActionHeight / 2 + 'px',
                    100 + callToActionHeight / 2 + 'px',
                ]}
                pb={[
                    50 + topMinusBoxHeight + 'px',
                    50 + topMinusBoxHeight + 'px',
                    100 + topMinusBoxHeight + 'px',
                ]}
            >
                <Container>
                    <Column width={[1, 1, 6 / 12]}>
                        <CustomHeading as="h2" mb="15px" color="black">
                            Current circulating supply
                        </CustomHeading>
                        <Text.p
                            mt="0"
                            mb="5px"
                            color="black"
                            fontWeight="500"
                            fontSize={[0, 0, 2]}
                        >
                            0 CT
                        </Text.p>
                        <Text.p
                            mt="0"
                            mb="0"
                            color="black"
                            fontSize={['14px', '14px', 1]}
                        >
                            Current market cap: 0 USD
                        </Text.p>
                    </Column>
                    <Column
                        width={[1, 1, 6 / 12]}
                        textAlign={['left', 'left', 'right']}
                        mt={['25px', '25px', 0]}
                    >
                        <CustomHeading as="h2" mb="15px" color="black">
                            Total supply
                        </CustomHeading>
                        <Text.p
                            mt="0"
                            mb="5px"
                            color="black"
                            fontWeight="500"
                            fontSize={[0, 0, 2]}
                        >
                            100,000 CT
                        </Text.p>
                        <Text.p
                            mt="0"
                            mb="0"
                            color="black"
                            fontSize={['14px', '14px', 1]}
                        >
                            Final market cap: 5,500,000 USD
                        </Text.p>
                    </Column>
                    <Column width={1} mt={['15px', '15px', '25px']}>
                        <MultiProgressBar
                            height="18px"
                            progresses={[
                                { value: 40, color: '#557169' },
                                { value: 60, color: '#7C8D87' },
                                { value: 1, color: '#254E46' },
                            ]}
                        />
                    </Column>
                    <Column
                        width={[1, 1, 6 / 12]}
                        mt={['15px', '15px', '25px']}
                    >
                        <Text.p
                            m="0"
                            fontSize={['14px', '14px', 1]}
                            color="black"
                        >
                            Max. Public Sales supply
                        </Text.p>
                    </Column>
                    {/* <Column
                        width={[1, 1, 6 / 12]}
                        mt={['15px', '15px', '25px']}
                    ></Column> */}
                </Container>
            </Box>
            {/* ==================================================================================
            ============ Coin infos, Prescale & calculator section
            ======================================================================================*/}

            <Box as={'section'} bg={'#DADFDA'}>
                <Container>
                    <Column width={12 / 12}>
                        {/* coin info box */}
                        <Box
                            borderRadius="19px"
                            boxShadow="10px 10px 30px 0 rgba(0,0,0,0.12)"
                            overflow="hidden"
                            mt={-topMinusBoxHeight + 'px'}
                            mb={['50px', '50px', '150px']}
                        >
                            {/* LY X Metrics */}

                            <Box
                                bg="#ffffff"
                                p={['20px', '20px', '50px']}
                                ref={topMinusBoxRef}
                            >
                                <CustomHeading
                                    as={'h2'}
                                    fontWeight="500"
                                    mb={['20px', '20px', '40px']}
                                >
                                    Connect (CT) Metrics
                                </CustomHeading>

                                <DetailsList>
                                    <li>
                                        <div>Coin</div>
                                        <div>Connect (CT)</div>
                                    </li>
                                    <li>
                                        <div>Total Supply</div>
                                        <div className="multiple">
                                            <div>100,000 CT</div>
                                            <ProgressBar value={100} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>UniSwap Allocation (CT)</div>
                                        <div className="multiple">
                                            <div>35,000 CT</div>
                                            <ProgressBar value={30} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>UniSwap Allocation (ETH)</div>
                                        <div className="multiple">
                                            <div>70% from presale</div>
                                            <ProgressBar value={80} />
                                        </div>
                                    </li>
                                </DetailsList>
                            </Box>
                            {/* Reversible ICO */}
                            <Box bg="#F5F5F5" p={['20px', '20px', '50px']}>
                                <CustomHeading as={'h3'}>
                                    CONNECTx Metrics
                                </CustomHeading>

                                <DetailsList rightBg="#EBEBEB">
                                    <li>
                                        <div>Token symbol on Ethereum</div>
                                        <div>CONNECTx (CTx)</div>
                                    </li>
                                    <li>
                                        <div>Total Available</div>
                                        <div className="multiple">
                                            <div>0 CTx</div>
                                            <ProgressBar value={1} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>UniSwap Liquidity Allocation</div>
                                        <div className="multiple">
                                            <div>1,000,000 CTx</div>
                                            <ProgressBar value={10} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            UniSwap Liquidity Allocation(ETH)
                                        </div>
                                        <div className="multiple">
                                            <div>? ETH</div>
                                            <ProgressBar value={0} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>Distribution</div>
                                        <div>
                                            Liquidity Mining (100CTx P/Block)
                                        </div>
                                    </li>
                                </DetailsList>
                                <Text.p
                                    textAlign="right"
                                    fontSize={['14px', '14px', 1]}
                                    color="#535353"
                                    mt={['10px', '10px', '40px']}
                                    mb="0"
                                >
                                    *Values aren’t finalized yet
                                </Text.p>
                            </Box>
                        </Box>
                        {/* End coin info box */}

                        {/* Start Prescale & Calculator box*/}
                        <Box
                            borderRadius="19px"
                            boxShadow="10px 10px 30px 0 rgba(0,0,0,0.12)"
                            overflow="hidden"
                            mb={-bottomMinusBoxHeight + 'px'}
                        >
                            <form action="">
                                <Box bg="#ffffff" p={['20px', '20px', '50px']}>
                                    <CustomHeading
                                        as={'h2'}
                                        fontWeight="500"
                                        mb={['10px', '10px', '40px']}
                                    >
                                        Prescale &amp; Calculator
                                    </CustomHeading>
                                    <Flex
                                        flexWrap="wrap"
                                        justifyContent="space-between"
                                    >
                                        <Box width={[1, 1, 'calc(50% - 10px)']}>
                                            <Flex
                                                flexWrap="wrap"
                                                alignItems="start"
                                                mb="30px"
                                            >
                                                <Input
                                                    type="text"
                                                    onChange={calcOnChange}
                                                    value={calcValue}
                                                />
                                                <Text.p
                                                    color="#535353"
                                                    flex="1"
                                                    m="0"
                                                    fontSize={[0, 0, 2]}
                                                >
                                                    <CalculatedText
                                                        value={calcValue}
                                                    />
                                                </Text.p>
                                            </Flex>
                                            <Flex
                                                flexWrap="wrap"
                                                justifyContent="space-between"
                                            >
                                                <Box
                                                    bg="#f5f5f5"
                                                    borderRadius="19px"
                                                    p="10px 15px"
                                                    width={[1, '48%']}
                                                    textAlign="center"
                                                >
                                                    <CustomHeading
                                                        as="h4"
                                                        mb="5px"
                                                        fontFamily="sansSerif"
                                                    >
                                                        Current Price
                                                    </CustomHeading>
                                                    <Box
                                                        borderRadius="4px"
                                                        bg="#D2D2D2"
                                                        width="100%"
                                                        height="2px"
                                                    />
                                                    <Text.p
                                                        fontSize={[
                                                            '14px',
                                                            '14px',
                                                            1,
                                                        ]}
                                                        mt="5px"
                                                        mb="0"
                                                    >
                                                        1 CT = 0.14 ETH
                                                    </Text.p>
                                                </Box>
                                                <Box
                                                    bg="#f5f5f5"
                                                    borderRadius="19px"
                                                    p="10px 15px"
                                                    width={[1, '48%']}
                                                    textAlign="center"
                                                    mt={['10px', 0]}
                                                >
                                                    <CustomHeading
                                                        as="h4"
                                                        mb="5px"
                                                        fontFamily="sansSerif"
                                                    >
                                                        Time Process
                                                    </CustomHeading>

                                                    <Text.p
                                                        fontSize={[
                                                            '14px',
                                                            '14px',
                                                            1,
                                                        ]}
                                                        mt="5px"
                                                        mb="0"
                                                    >
                                                        Start in{' '}
                                                        {`${countDown.days} ${countDown.hours} ${countDown.minutes} ${countDown.seconds}`}
                                                    </Text.p>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box
                                            width={[1, 1, 'calc(50% - 10px)']}
                                            mt={['15px', '15px', 0]}
                                        >
                                            <Text.p
                                                mt="0"
                                                mb="10px"
                                                fontSize={['14px', '14px', 1]}
                                                color="#535353"
                                            >
                                                <strong>Connect public bonused presale</strong>{' '}
                                                will take place on November 27th, 2020 15:00 UTC. We will be giving extra bonus up to 300 CONNECTx (CTx) for first round participants!!!
                                            </Text.p>
                                        </Box>
                                    </Flex>
                                </Box>

                                {/* Reversible ICO */}
                                <Box
                                    bg="#F5F5F5"
                                    p={['20px', '20px', '50px']}
                                    ref={bottomMinusBoxRef}
                                >
                                    <Flex
                                        flexWrap="wrap"
                                        justifyContent="space-between"
                                        my="-5px"
                                    >
                                        <Box width={[1, 1, '48%']} py="5px">
                                            <Checkbox label="I am not a citizen of the US, or China (Mainland), as well as: AF, BA, ET, GY, IR, IQ, KP, LA, PK, LK, SY, TT, TN, UG, VU, YE, RU, TR, CY, MT, VG, KY, BM, GG, JE and IM" />
                                        </Box>
                                        <Box width={[1, 1, '48%']} py="5px">
                                            <Checkbox label="I have an ERC20 compatible wallet, which can add custom tokens, and where I control the private keys." />
                                        </Box>
                                        <Box width={[1, 1, '48%']} py="5px">
                                            <Checkbox label="I understand the volatility of the cryptocurrency market, and I'm not investing last money." />
                                        </Box>

                                        <CustomButton ml="auto">
                                            NOT STARTED
                                        </CustomButton>
                                    </Flex>
                                </Box>
                            </form>
                        </Box>
                        {/* End  Prescale & Calculator box*/}
                    </Column>
                </Container>
            </Box>

            {/* ==================================================================================
            ============ FAQs section
            ======================================================================================*/}
            <Box
                as={'section'}
                py={['50px', '50px', '100px']}
                pt={[
                    50 + bottomMinusBoxRef.current?.scrollHeight + 'px',
                    50 + bottomMinusBoxRef.current?.scrollHeight + 'px',
                    100 + bottomMinusBoxRef.current?.scrollHeight + 'px',
                ]}
                bg={'background.secondaryDark'}
            >
                <Container>
                    <Column width={1} textAlign="center">
                        <CustomHeading
                            as={'h1'}
                            mb={['10px', '10px', '20px']}
                            color="white"
                        >
                            Frequently Asked Questions
                        </CustomHeading>
                    </Column>
                    <Column width={[1]}>
                        {/* FAQs wrapper */}

                        <Flex flexWrap="wrap" justifyContent="space-between">
                            <Box width={[1, 1, '47%']}>
                                <TabBox
                                    title="How can you obtain ConnectX tokens?"
                                    wrapperProps={{
                                        width: '100%',
                                        mt: '30px',
                                    }}
                                >
                                    ConnectX tokens will be obtainable through liquidity mining and liquidity providing on uniswap.
                                </TabBox>
                                <TabBox
                                    title="I heard there's a presale bonus, how can I claim it?"
                                    wrapperProps={{
                                        width: '100%',
                                        mt: '30px',
                                    }}
                                >
                                    The process of claiming your bonus will be automatic. It will be sent to your wallet at the end of the transaction.
                                </TabBox>
                                <TabBox
                                    title="Do you plan on listing on more exchanges?"
                                    wrapperProps={{
                                        width: '100%',
                                        mt: '30px',
                                    }}
                                >
                                    In the beginning we will list our tokens on Uniswap and as we grow, we will get listed on more exchanges.
                                </TabBox>
                            </Box>
                            <Box width={[1, 1, '47%']}>
                                <TabBox
                                    title="Who can affect the future of ConnectX?"
                                    wrapperProps={{
                                        width: '100%',
                                        mt: '30px',
                                    }}
                                >
                                    Answer: Every member who has enough tokens to vote can influence and suggest ideas which will have an impact on the network.
                                </TabBox>
                                <TabBox
                                    title="How will the team allocate the presale funds?"
                                    wrapperProps={{
                                        width: '100%',
                                        mt: '30px',
                                    }}
                                >
                                    The team will be using 60% of the presale funds to provide liquidity which will be locked for 365 days. This step will prevent the team from rug pulling
                                </TabBox>
                            </Box>
                        </Flex>
                    </Column>
                </Container>
            </Box>
        </Layout>
    );
};

export default Home;
