const Total = (props: { exercises: number[] }) => {
    const totalExercises = props.exercises.reduce((sum, exercise) => sum + exercise, 0)

    return (
        <div>
            <p>Number of exercises: {totalExercises}</p>
        </div>
    )
}

export default Total