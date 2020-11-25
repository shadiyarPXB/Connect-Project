import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rimble-ui';

CustomButton.propTypes = {};

function CustomButton({ children, ...props }) {
    return (
        <Button
            borderRadius={['10px', '10px', '15px']}
            fontSize={['18px', '18px', '20px']}
            boxShadow='20px 20px 60px #d9d5d5, 
            -20px -20px 60px #ffffff'
            mainColor={'linear-gradient(90deg, rgba(38,78,70,1) 0%, rgba(38,59,78,1) 100%)'}
            {...props}
        >
            {children}
        </Button>
    );
}

export default CustomButton;
