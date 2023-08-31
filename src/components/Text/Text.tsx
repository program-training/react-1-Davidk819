import { useState } from "react";
import "./Text.css";

interface Props {
    text: string;
}

export function Text(props:Props){
    const[text,setText] = useState<boolean>(true);
    return (
        <div className="text">
            <button onClick={() => setText((val) => !val)}>{props.text}</button>
            {text && <p>hello world</p>}
        </div>
    )
}