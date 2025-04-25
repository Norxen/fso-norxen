const Content = (props: {data: {part:string, exercise:number}[]}) => {
    return ( 
        <div>
            {props.data.map((item, index) => (
                <p key={index}>
                    {item.part} {item.exercise}
                </p>
            ))}
        </div>
    )
}

export default Content