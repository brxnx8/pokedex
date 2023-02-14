

export function Button(props){
    
    let lessOrPlus = (props.action==="Next"?true:false);

    return(
        <>
            <button onClick={()=>{props.NumberLessOrPlus(lessOrPlus)}}>
                {props.action}
            </button>
        </>
    )
}