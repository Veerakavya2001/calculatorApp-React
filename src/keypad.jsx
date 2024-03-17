

export default function Keys(props){
    return(
        <div>
            <div className="row">
                <button className="digit" onClick={()=>{props.handleclick("1")}} >1</button>
                <button className="digit" onClick={()=>{props.handleclick("2")}}>2</button>
                <button className="digit" onClick={()=>{props.handleclick("3")}}>3</button>
                <button className="digit" onClick={()=>{props.handleclick("/")}}>/</button>
            </div>
            <div className="row">
                <button className="digit" onClick={()=>{props.handleclick("4")}}>4</button>
                <button className="digit" onClick={()=>{props.handleclick("5")}}>5</button>
                <button className="digit" onClick={()=>{props.handleclick("6")}}>6</button>
                <button className="digit" onClick={()=>{props.handleclick("*")}}>*</button>
            </div>
            <div className="row">
                <button className="digit" onClick={()=>{props.handleclick("7")}}>7</button>
                <button className="digit" onClick={()=>{props.handleclick("8")}}>8</button>
                <button className="digit" onClick={()=>{props.handleclick("9")}}>9</button>
                <button className="digit" onClick={()=>{props.handleclick("-")}}>-</button>
            </div>
            <div className="row">
                <button className="digit" onClick={()=>{props.handleclick("0")}}>0</button>
                <button className="digit" onClick={()=>{props.handleclick(".")}}>.</button>
                <button className="digit" onClick={()=>{props.handleequalbtn()}}>=</button>
                <button className="digit" onClick={()=>{props.handleclick("+")}}>+</button>
            </div>
        </div>
    )
}