import StatisticLine from "./StatisticLine";

const Statistics = (props: { good: number; neutral: number; bad: number }) => {
    const all = props.good + props.neutral + props.bad
    const average = all === 0 ? 0 : (props.good - props.bad) / all
    const positive = all === 0 ? 0 : (props.good / all) * 100

    return (
        <div>
            <h1>statistics</h1>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
        </div>
    )
}

export default Statistics