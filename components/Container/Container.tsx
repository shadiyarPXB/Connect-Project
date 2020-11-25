import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rimble-ui';

const Container = ({ children, ...props }) => {
    return (
        <Box
            width="100%"
            px={['15px', '15px', '15px', 0]}
            maxWidth={['100%', '560px', '740px', '980px']}
            mx="auto"
            {...props}
        >
            <Flex flexWrap="wrap" mx={'-10px'}>
                {children}
            </Flex>
        </Box>
    );
};

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Container;
