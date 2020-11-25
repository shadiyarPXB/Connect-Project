import styled from 'styled-components';

interface ProgressBarProps {
    value: number;
    height?: string;
}

const ProgressBarWrapper = styled.div`
    position: relative;
    height: ${(props) => props.height || '8px'};
    border-radius: ${(props) => props.borderRadius || '50px'};
    background-color: ${(props) => props.bg || '#D3D3D3'};
    overflow: hidden;

    &::after {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background-color: ${(props) => props.progressBg || '#264E46'};
        width: ${(props) => props.value + '%'};
    }
`;

const ProgressBar = ({ value, height }: ProgressBarProps) => {
    return <ProgressBarWrapper value={value} height={height} />;
};

export default ProgressBar;
