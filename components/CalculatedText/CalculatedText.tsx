interface CalculatedTextProps {
    value: number;
}

const CalculatedText = ({ value }: CalculatedTextProps) => {
    if (value > 1.5 && value < 3) {
        return (
            <>
                <span
                    style={{
                        color: '#000',
                    }}
                >
                    ETH will give
                </span>{' '}
                {value * 7.14}{' '}
                <span
                    style={{
                        color: '#000',
                    }}
                >
                    CT. + 150
                </span>{' '}
                CTx tokens will be distributed after transaction confirmation.
            </>
        );
    } else if (value > 3) {
        return (
            <>
                <span
                    style={{
                        color: '#000',
                    }}
                >
                    ETH will give
                </span>{' '}
                {value * 7.14}{' '}
                <span
                    style={{
                        color: '#000',
                    }}
                >
                    CT + 300
                </span>{' '}
                CTx tokens will be distributed after transaction confirmation.
            </>
        );
    }
    return (
        <>
            <span
                style={{
                    color: '#000',
                }}
            >
                ETH will give
            </span>{' '}
            {value * 7.14}{' '}
            <span
                style={{
                    color: '#000',
                }}
            >
                CT
            </span>{' '}
            Get up to 300 CTx tokens for &gt; 1.5 ETH
        </>
    );
};

export default CalculatedText;
