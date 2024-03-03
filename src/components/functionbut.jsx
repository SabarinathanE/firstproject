function CounterFunc (props) {
    return (
        <button onClick={props.handleCounter}>{props.label}</button>
    )
}

export default CounterFunc;