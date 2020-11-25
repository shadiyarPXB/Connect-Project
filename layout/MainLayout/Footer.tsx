import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import Column from '../../components/Column/Column';

const MainFooter = styled.footer`
    background-color: ${(props) => props.theme.colors.background.primary};
    color: ${(props) => props.theme.colors.textSecondary};
    height: 182px;
    display: flex;
    align-items: center;
`;

const SocialIcon = styled.div`
    margin: 0 -10px;
    @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
        margin: 0 -20px;
    }
    a {
        font-size: 30px;
        margin: 10px;
        @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
            font-size: 50px;
            margin: 20px;
        }
    }
`;

const FooterLogo = styled.div`
    text-align: center;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes[6]}px;
`;

const FooterLinks = styled.div`
    text-align: right;
    margin: 0 -5px;
    a {
        margin: 0 5px;
        font-size: ${(props) => props.theme.fontSizes[1]}px;
        @media (min-width: ${(props) => props.theme.breakpoints[2]}) {
            font-size: ${(props) => props.theme.fontSizes[4]}px;
        }
    }
`;

function Footer() {
    return (
        <MainFooter>
            <Container>
                <Column
                    width={[1, 1, 4 / 12]}
                    display="flex"
                    alignItems="center"
                    justifyContent={['center', 'center', 'flex-start']}
                    order={[3, 3, 1]}
                >
                    <SocialIcon>
                        <a href="https://t.me/ConnectxProject">
                            <i className="fa fa-paper-plane-o" />
                        </a>
                        <a href="https://twitter.com/ConnectxProject">
                            <i className="fa fa-twitter" />
                        </a>
                    </SocialIcon>
                </Column>
                <Column
                    width={[1, 1, 4 / 12]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    order={[1, 1, 2]}
                >
                    <FooterLogo>
                        <a href="">connectx</a>
                    </FooterLogo>
                </Column>
                <Column
                    width={[1, 1, 4 / 12]}
                    order={[2, 2, 3]}
                    my={['10px', '10px', 0]}
                    display="flex"
                    alignItems="center"
                    justifyContent={['center', 'center', 'flex-end']}
                >   
                </Column>
            </Container>
        </MainFooter>
    );
}

export default Footer;
