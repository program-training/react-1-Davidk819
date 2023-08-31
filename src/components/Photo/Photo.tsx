interface Props {
    imageLink: string;
}

function Photo(props:Props){
    return(
        <img src={props.imageLink} alt="A Photo" className="photo">
        </img>
    )
}
export default Photo