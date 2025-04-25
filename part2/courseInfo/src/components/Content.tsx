import Part from "./Part"

const Content = (props: {data: {name:string, exercises:number}[]}) => {
    return (
        <div>
            {props.data.map((item, index) => {
                const partInfo = { name: item.name, exerciseCount: item.exercises };
                return <Part key={index} part={partInfo} />;
            })}
        </div>
    )
}

export default Content