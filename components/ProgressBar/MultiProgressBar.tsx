import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
    position: relative;
    height: ${(props) => props.height || '8px'};
    border-radius: ${(props) => props.borderRadius || '50px'};
    background-color: ${(props) => props.bg || '#A0AAA5'};
    overflow: hidden;
`;

const ProgressBar = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    transition: 0.3s;
    background-color: ${(props) => props.progressBg || '#264E46'};
    width: ${(props) => props.value + '%'};
    z-index: ${(props) => props.index + 1};
`;

interface ProgressesProps {
    value: number;
    color?: string;
}

interface ProgressBarProps {
    progresses: ProgressesProps[];
    height?: string;
}

const MultiProgressBar = ({ progresses, height }: ProgressBarProps) => {
    const sortedProgresses = progresses.sort(function (a, b) {
        return b.value - a.value;
    });

    return (
        <ProgressBarWrapper height={height}>
            {sortedProgresses.map((progress, index) => (
                <ProgressBar
                    key={index}
                    value={progress.value}
                    progressBg={progress.color}
                    index={index}
                />
            ))}
        </ProgressBarWrapper>
    );
};

export default MultiProgressBar;
