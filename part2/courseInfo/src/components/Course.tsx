import Total from "./Total";
import Content from "./Content";

const Course = (props: { course: { id: number; name: string; parts: { name: string; exercises: number }[] } }) => {

    return (
        <div>
            <h1>{props.course.name}</h1>
            <Content data={props.course.parts} />
            <Total exercises={props.course.parts.map(part => part.exercises)} />
        </div>
    )
}

export default Course