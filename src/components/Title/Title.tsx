import "./Title.css"
interface TitleProps {
    text: string;
}

export default function Title(props:TitleProps) {
    return (
    <p className="title" > {props.text} </p> 
    );
}
