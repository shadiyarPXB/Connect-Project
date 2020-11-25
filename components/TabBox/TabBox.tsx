import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Box, Flex, Text } from 'rimble-ui';
import CustomHeading from '../CustomHeading/CustomHeading';

const Icon = dynamic(() => import('@rimble/icons').then((mod) => mod.Icon), {
    ssr: false,
});

const TitleWrapperButton = styled.button`
    width: 100%;
    background-color: #fff;
    border: none;
    align-items: center;
    cursor: pointer;
    padding: 0;
    display: flex;
    padding: 19px 23px;
    padding-bottom: 17px;

    img {
        height: 30px;
        width: 30px;

        border-radius: 50%;
        object-fit: contain;
        object-position: center center;
        margin-right: 10px;
    }
    h3 {
        word-break: break-all;
    }
    h3,
    span {
        transition: 0.3s;
    }

    &:hover h3 {
        color: #264e46;
    }
    &:hover span {
        background: #264e46;
    }
`;

interface TabBoxProps {
    title: string;
    children: React.ReactNode;
    wrapperProps?: object;
    img?: string;
}

const TabBox = ({ title, children, wrapperProps, img }: TabBoxProps) => {
    const contentRef = useRef(null);
    const [isCollapse, setIsCollapse] = useState(false);

    const toggleCollapse = useCallback(
        () => setIsCollapse((prevState) => !prevState),
        []
    );

    useEffect(() => {
        contentRef.current.style.maxHeight = isCollapse
            ? `${contentRef.current.scrollHeight}px`
            : '0px';
    }, [contentRef, isCollapse]);

    return (
        <Box
            borderRadius={'19px'}
            bg={'white'}
            boxShadow={'10px 10px 30px 0 rgba(0,0,0,0.12)'}
            color={'textTertiary'}
            overflow="hidden"
            width="100%"
            {...wrapperProps}
        >
            <TitleWrapperButton onClick={toggleCollapse}>
                {img && <img src={img} alt={title} />}
                <CustomHeading
                    as={'h3'}
                    mb={'0'}
                    color={'text'}
                    width={img ? 'calc(100% - 85px)' : 'calc(100% - 45px)'}
                    textAlign="left"
                >
                    {title}
                </CustomHeading>
                <Flex
                    as="span"
                    ml="auto"
                    color={'white'}
                    backgroundColor="black"
                    borderRadius={'50%'}
                    alignItems="center"
                    justifyContent="center"
                    height="30px"
                    width="30px"
                    boxShadow="-10px -10px 25px 0 #FFFFFF, 10px 10px 25px 0 #CACACA"
                >
                    <Icon
                        // @ts-ignore
                        name={'Add'}
                        style={{
                            transform: isCollapse
                                ? 'rotate(45deg)'
                                : 'rotate(0)',
                            transition: 'transform 0.6s ease',
                        }}
                    />
                </Flex>
            </TitleWrapperButton>
            <Box
                ref={contentRef}
                overflow="hidden"
                style={{ transition: 'max-height 0.6s ease' }}
            >
                <Box m="0" p={'19px 23px'} pt="0" fontSize={[0, 0, 1]}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

TabBox.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    wrapper: PropTypes.object,
};

export default TabBox;
