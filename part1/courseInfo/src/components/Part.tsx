const Part = (props: { part: { name: string; exerciseCount: number } }) => {
    return (
        <p>
            {props.part.name} {props.part.exerciseCount}
        </p>
    )
}

export default Part