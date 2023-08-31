import { useState } from "react";
import Title from "../Title/Title";
import { Text } from "../Text/Text";
import Photo from "../Photo/Photo";
import "./Card.css"

interface Props {
    title: string;
    link: string;
    text: string;
}

export function Card(props:Props) {
    return (
        <div className="card">
            <Title text={props.title}></Title>
            <Photo imageLink={props.link}></Photo>
            <Text text={props.text}></Text>
            <select></select>
        </div>
    )
}

