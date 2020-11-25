import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rimble-ui';

function CustomHeading({ as, children, ...rest }) {
    if (as === 'h1') {
        return (
            <Heading
                as={as}
                fontWeight={400}
                fontFamily={'heading'}
                fontSize={[5, 5, 6]}
                {...rest}
            >
                {children}
            </Heading>
        );
    } else if (as === 'h2') {
        return (
            <Heading
                as={as}
                fontWeight={400}
                fontFamily={'heading'}
                fontSize={[4, 4, 5]}
                {...rest}
            >
                {children}
            </Heading>
        );
    } else if (as === 'h3') {
        return (
            <Heading
                as={as}
                fontWeight={400}
                fontFamily={'heading'}
                fontSize={[3, 3, 4]}
                {...rest}
            >
                {children}
            </Heading>
        );
    } else if (as === 'h4') {
        return (
            <Heading
                as={as}
                fontWeight={400}
                fontFamily={'heading'}
                fontSize={[2, 2, 3]}
                {...rest}
            >
                {children}
            </Heading>
        );
    }
    return null;
}

CustomHeading.propTypes = {
    as: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default CustomHeading;
