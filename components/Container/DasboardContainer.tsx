import PropTypes from 'prop-types';
import { Flex, Box } from 'rimble-ui';

function DashboardContainer({ children, ...props }) {
    return (
        <Box
            width="100%"
            // maxWidth={['100%', '560px', '740px', '980px']}
            mx="auto"
            {...props}
        >
            <Flex flexWrap="wrap" mx={'-10px'}>
                {children}
            </Flex>
        </Box>
    );
}

DashboardContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default DashboardContainer;
