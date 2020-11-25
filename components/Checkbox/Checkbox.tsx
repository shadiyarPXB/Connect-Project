import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 6px;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: ${(props) => props.theme.fontSizes[0] + 'px'};
    @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
        font-size: ${(props) => props.theme.fontSizes[1] + 'px'};
        margin-bottom: 12px;
    }
    :hover input ~ .checkmark {
        background-color: #ccc;
    }
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:hover input ~ .checkmark {
            background-color: #ccc;
        }
    }
    input:checked ~ .checkmark {
        background-color: #264e46;
    }
    input:checked ~ .checkmark:after {
        display: block;
    }
`;
const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #d5d5d5;
    border-radius: 3px;
    &::after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: 1px;
        width: 8px;
        height: 13px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

interface CheckboxProps {
    label: React.ReactNode;
    inputProps?: object;
}

const Checkbox = ({ label, inputProps }: CheckboxProps) => {
    return (
        <Label>
            {label}
            <input type="checkbox" {...inputProps} />
            <CheckMark className="checkmark"></CheckMark>
        </Label>
    );
};

export default Checkbox;
