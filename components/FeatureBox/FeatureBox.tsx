import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from 'rimble-ui';
import CustomHeading from '../CustomHeading/CustomHeading';

const FeatureBox = ({ title, description, img }) => {
    return (
        <Flex
            my={['15px', '15px', '20px']}
            p={'30px 20px'}
            flexWrap={'wrap'}
            boxShadow={'-6px -6px 15px -12px #387669, 0px 12px 15px 0 #122622'}
            bg={'#22453D'}
            borderRadius={['10px', '10px', '19px']}
            width={'100%'}
            alignItems="center"
        >
            <Box
                height={['50px', '50px', '100px']}
                width={['50px', '50px', '100px']}
                mr={['20px', '20px', '40px']}
                borderRadius={'50%'}
                bg="transparent"
                as={'img'}
                alt={title}
                src={img}
            />
            <Flex
                width={[
                    'calc(100% - 70px)',
                    'calc(100% - 70px)',
                    'calc(100% - 140px)',
                ]}
                alignItems="center"
                flexWrap="wrap"
            >
                <CustomHeading
                    as={'h2'}
                    color={'#DFDFDF'}
                    mb={['5px', '5px', '10px']}
                    width={'100%'}
                >
                    {title}
                </CustomHeading>
                <CustomHeading as={'h1'} width={'100%'}>
                    {description}
                </CustomHeading>
            </Flex>
        </Flex>
    );
};

FeatureBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureBox;
