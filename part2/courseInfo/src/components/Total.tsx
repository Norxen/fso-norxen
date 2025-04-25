const Total = (props: { exercises: number[] }) => {
    const totalExercises = props.exercises.reduce((sum, exercise) => sum + exercise, 0)

    return (
        <div>
            <p><strong>Number of exercises: {totalExercises}</strong></p>
        </div>
    )
}

export default Total