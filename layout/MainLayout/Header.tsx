import React, { useState } from 'react';
import { Box, Modal, Text, Card, Button, Heading } from 'rimble-ui';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Container from '../../components/Container/Container';
import Column from '../../components/Column/Column';
import CustomButton from '../../components/CustomButton/CustomButton';
const Icon = dynamic(() => import('@rimble/icons').then((mod) => mod.Icon), {
    ssr: false,
});

const MainHeader = styled.header`
    display: flex;
    align-items: center;
    height: 120px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

const LogoLink = styled.a`
    margin: auto;
    margin-left: inherit;
    display: inline-block;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes[6]}px;
`;

const MainNavs = styled.nav`
    position: fixed;
    right: ${(props) => (props.isActive ? 0 : '-310px')};
    top: 0;
    height: 100vh;
    overflow-y: hidden;
    width: 300px;
    background-color: #fff;
    z-index: 999;
    box-shadow: -13px 1px 30px 0 rgba(0, 0, 0, 0.12);
    padding: 30px 20px;
    padding-top: 60px;
    transition: 0.3s ease-in-out;
    @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
        padding: 0;
        position: inherit;
        width: auto;
        height: auto;
        background-color: inherit;
        box-shadow: none;
        text-align: right;
    }
    /* Hamburger menu close button  */
    button {
        padding: 0;
        background: none;
        border: none;
        position: absolute;
        right: 20px;
        top: 20px;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            color: red;
        }

        svg {
            height: 40px;
            width: 40px;
        }
        @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
            display: none;
        }
    }
    a {
        padding: 8px 8px;
        transition: all 0.3s;
        display: flex;
        font-size: 20px;
        @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
            display: inline-flex;
            padding: 10px 20px;
        }
    }
    a:not(.button):hover {
        color: ${(props) => props.theme.colors.hoverPrimary};
    }
`;

const MobileMenuTrigger = styled.button`
    padding: 0;
    background: none;
    border: none;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: auto;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        color: #12463c;
    }
    svg {
        height: 40px;
        width: 40px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
        display: none;
    }
`;

const Overlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    background-color: #000000;
    opacity: ${(props) => (props.isActive ? 0.5 : 0)};
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
    z-index: 998;
    @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
        display: none;
    }
`;
function Header() {
    // Modal state
    const [isOpen, setIsOpen] = useState(false);
    // Mobile menu state
    const [isActive, setIsActive] = useState(false);

    const menuOpenHandler = () => setIsActive(true);
    const menuCloseHandler = () => setIsActive(false);

    const widgetButtonClickHandler = (e) => {
        e.preventDefault();

        // @ts-ignore
        if (window !== undefined && window.AirSwapInstant) {
            // @ts-ignore
            window.AirSwapInstant.render(
                {
                    env: 'production',
                    mode: 'sell',
                    token: '0xb53e08b97724126bda6d237b94f766c0b81c90fe', // RBX
                    baseToken: '0xefe556ae20c768fe9e1705e1cd0dda2264eec3c3', // PIXBY
                    amount: '',
                    onClose: function () {
                        console.info('Widget closed.');
                    },
                    onComplete: function (transactionId) {
                        console.info('Trade complete.', transactionId);
                    },
                },
                'body'
            );
        }
    };
    const onClickHandler = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    return (
        <MainHeader>
            <Head>
                <script src="https://cdn.airswap.io/airswap-instant-widget.js"></script>
            </Head>
            <Overlay isActive={isActive} onClick={menuCloseHandler} />
            <Container
                alignItems="center"
                // bg={['red', 'green', 'yellow', 'blue']}
            >
                <Column width={[6 / 12, 6 / 12, 4 / 12]} display="flex">
                    <LogoLink>connectx</LogoLink>
                </Column>
                <Column
                    width={[6 / 12, 6 / 12, 8 / 12]}
                    display={['flex', 'flex', 'flex', 'block']}
                >
                    <MobileMenuTrigger onClick={menuOpenHandler}>
                        <Icon
                            // @ts-ignore*/
                            name="Menu"
                        />
                    </MobileMenuTrigger>
                    <MainNavs isActive={isActive}>
                        <button onClick={menuCloseHandler}>
                            <Icon
                                // @ts-ignore*/
                                name="Close"
                            />
                        </button>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/">
                            <a onClick={onClickHandler}>Defi</a>
                        </Link>
                        <Link href="/">
                            <a onClick={onClickHandler}>Dashboard</a>
                        </Link>
                        <Link href="/">
                            <a>Discord</a>
                        </Link>

                        <CustomButton
                            as="a"
                            boxShadow="none"
                            className="button"
                            size="medium"
                            mt={3}
                            href="#"
                            onClick={widgetButtonClickHandler}
                        >
                            SWAP PIXBY
                        </CustomButton>
                    </MainNavs>
                </Column>
            </Container>

            {/* Temporary Modal  */}

            <Modal isOpen={isOpen}>
                <Card width={['420px', '420px', '420px']} p={0}>
                    <Button.Text
                        icononly
                        icon={'Close'}
                        color={'#000 !important'}
                        position={'absolute'}
                        top={0}
                        right={0}
                        mt={3}
                        mr={3}
                        onClick={onClickHandler}
                    />

                    <Box p={4} mb={3} mt={3}>
                        <Text>Hold on! We are working on this</Text>
                    </Box>
                </Card>
            </Modal>
        </MainHeader>
    );
}

export default Header;
