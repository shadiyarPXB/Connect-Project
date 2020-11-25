import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-size: 16px;
    @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
        font-size: 20px;
    }
`;

const Main = styled.main`
    flex: 1;
    overflow: hidden;
`;
const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </LayoutWrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default Layout;
