import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rimble-ui';

RoundedBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

function RoundedBox({ children, ...rest }) {
    return (
        <Box
            borderRadius={'19px'}
            boxShadow={
                ' -5px -5px 6px 0 rgba(253,253,253,0.89), 5px 5px 17px 0 #C7C7C7'
            }
            bg={'white'}
            {...rest}
        >
            {children}
        </Box>
    );
}

export default RoundedBox;
