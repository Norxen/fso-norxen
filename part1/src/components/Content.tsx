import Part from "./Part"

const Content = (props: {data: {part:string, exercise:number}[]}) => {
    return (
        <div>
            {props.data.map((item, index) => {
                const partInfo = { name: item.part, exerciseCount: item.exercise };
                return <Part key={index} part={partInfo} />;
            })}
        </div>
    )
}

export default Content