import { Flex, Box, Text } from 'rimble-ui';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
const Icon = dynamic(() => import('@rimble/icons').then((mod) => mod.Icon), {
    ssr: false,
});

const menuItems = [
    { icon: 'fa-eye', title: 'Dashboard', href: '/dashboard' },
    { icon: 'fa-facebook', title: 'Liquidity mining', href: '/dashboard' },
    { icon: 'fa-facebook', title: 'Token swap', href: '/dashboard' },
    { icon: 'fa-facebook', title: 'Voting', href: '/dashboard' },
];
const socialLinks = [
    { icon: 'fa-facebook', href: '/' },
    { icon: 'fa-twitter', href: '/' },
    { icon: 'fa-instagram', href: '/' },
];

const MenuItem = styled.a`
    display: block;
    position: relative;
    padding: 15px 20px;
    padding-left: 49px;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) =>
        props.isActive
            ? props.theme.colors.hoverPrimary
            : props.theme.colors.black};
    transition: 0.3s;
    &:hover {
        color: ${(props) => props.theme.colors.hoverPrimary};
        padding-left: 52px;
    }
`;

const SocialLinkItem = styled.a`
    display: inline-block;
    font-size: 32px;
    padding: 0 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textGrey};
    transition: 0.3s;
    &:hover {
        color: ${(props) => props.theme.colors.hoverPrimary};
    }
`;

function Sidebar(props) {
    return (
        <Flex
            width={['290px']}
            py={'42px'}
            px={'25px'}
            bg={'#F6F6F6'}
            height={'100vh'}
            flexDirection={'column'}
        >
            {/*User dropdown */}
            <Flex style={{ cursor: 'pointer' }} mb={'30px'}>
                <Box
                    borderRadius={'14px'}
                    bg={'background.primary'}
                    width={'48px'}
                    height={'48px'}
                />
                <Box pl={'10px'}>
                    <Text lineHeight={1}>walletadress.eth</Text>
                    <Text fontWeight={500}>&#36;1,630.34</Text>
                </Box>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    ml={'auto'}
                >
                    {/*// @ts-ignore*/}
                    <Icon name={'ExpandMore'} />
                </Flex>
            </Flex>
            {/*Horizental bar*/}
            <Box
                bg={'background.secondarySemiDark'}
                height={'1px'}
                mb={'15px'}
            />

            {/*Menus*/}
            <Box overflowY={'auto'} pt={'15px'}>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} href={item.href}>
                        <Box
                            as={'i'}
                            className={`fa ${item.icon}`}
                            position={'absolute'}
                            left={'20px'}
                            top={'50%'}
                            style={{ transform: 'translateY(-50%)' }}
                        />
                        {item.title}
                    </MenuItem>
                ))}
            </Box>
            {/*Social links */}
            <Box mt={'auto'}>
                {socialLinks.map((item, index) => (
                    <SocialLinkItem key={index} href={item.href}>
                        <Box as={'i'} className={`fa ${item.icon}`} />
                    </SocialLinkItem>
                ))}
            </Box>
        </Flex>
    );
}

export default Sidebar;
