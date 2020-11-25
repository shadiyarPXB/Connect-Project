import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rimble-ui';

function Column({ children, ...props }) {
    return (
        <Box px="10px" {...props}>
            {children}
        </Box>
    );
}

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Column;
