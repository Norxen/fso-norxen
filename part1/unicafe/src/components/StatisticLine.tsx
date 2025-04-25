type StatisticLineProps = {
    text: string;
    value: number;
};

const StatisticLine = (props: StatisticLineProps) => {
    const displayValue =
        props.value % 1 !== 0 ? props.value.toFixed(1) : props.value;

    return (
        <tr>
            <td>{props.text}</td>
            <td>
                {displayValue}
                {props.text === 'positive' ? ' %' : ''}
            </td>
        </tr>
    );
};

export default StatisticLine;