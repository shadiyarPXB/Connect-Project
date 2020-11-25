import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from 'rimble-ui';
import CustomHeading from '../CustomHeading/CustomHeading';
import CustomButton from '../CustomButton/CustomButton';

const Call2Action = (props) => {
    return (
        <Flex
            borderRadius={'19px'}
            bg={'white'}
            boxShadow={'10px 10px 30px 0 rgba(0,0,0,0.12)'}
            color={'textTertiary'}
            p={['20px', '20px', '50px']}
            flexWrap={'wrap'}
            textAlign={['center', 'center', 'left']}
        >
            <Box width={[1, 1, 9 / 12]}>
                <CustomHeading
                    as={'h2'}
                    mb={['10px', '10px', '15px']}
                    color={'text'}
                >
                    Become a part of our Community!
                </CustomHeading>
                <Text.p m={0} fontSize={[0, 0, 2]}>
                    Never missout a single update! Join our community now!
                </Text.p>
            </Box>
            <Flex
                mt={['10px', '10px', 0]}
                width={[1, 1, 3 / 12]}
                alignItems={'center'}
                justifyContent={['center', 'center', 'flex-end']}
            >
                <CustomButton width={['100%', '100%', 'auto']} href="https://t.me/ConnectxProject">
                    Join Telegram
                </CustomButton>
            </Flex>
        </Flex>
    );
};

Call2Action.propTypes = {};

export default Call2Action;
