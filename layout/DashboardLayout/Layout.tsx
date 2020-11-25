import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rimble-ui';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <Flex flexWrap={'wrap'}>
            <Sidebar />
            <Box as={'main'} flexGrow={1} p={'50px 100px'}>
                {children}
            </Box>
        </Flex>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

export default DashboardLayout;
