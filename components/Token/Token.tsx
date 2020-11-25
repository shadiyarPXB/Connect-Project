import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { Text, Box, Flex } from 'rimble-ui';
import RoundedBox from '../RoundedBox/RoundedBox';
import CustomHeading from '../CustomHeading/CustomHeading';
const Icon = dynamic(() => import('@rimble/icons').then((mod) => mod.Icon), {
    ssr: false,
});

Token.propTypes = {
    name: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    roundedBoxProps: PropTypes.object,
};

function Token({ name, token, roundedBoxProps }) {
    return (
        <RoundedBox
            p={'18px 20px'}
            mb={['20px', '20px', '40px']}
            bg={'white'}
            {...roundedBoxProps}
        >
            <Flex>
                <Box width={['30%', '30%', '40%']}>
                    <CustomHeading as={'h3'}>
                        {name}
                        {/*// @ts-ignore*/}
                        <Icon name={'ArrowForward'} ml={2} />
                    </CustomHeading>
                </Box>
                <Box
                    width={['70%', '70%', '60%']}
                    style={{ wordBreak: 'break-all' }}
                >
                    <CustomHeading as={'h3'} fontWeight={400} mb={1}>
                        Contract address
                    </CustomHeading>
                    <Text.p m={0} color={'#A3A3A3'} fontSize={[0, 0, 2]}>
                        {token}
                    </Text.p>
                </Box>
            </Flex>
        </RoundedBox>
    );
}

export default Token;
