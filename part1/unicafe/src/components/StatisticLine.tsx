type StatisticLineProps = {
    text: string
    value: number
}

const StatisticLine = (props: StatisticLineProps) => (
    <p>
        {props.text} {props.value} {props.text === 'positive' ? ' %' : ''}
    </p>
)

export default StatisticLine