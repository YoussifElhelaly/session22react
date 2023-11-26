import { useEffect, useRef, useState } from 'react'
import './box.css'

export default function Box(props) {

    return (
        <div className="box">
            <div className="img">
                <img src={props.img} alt={props.title} />
            </div>
            <h2>title : {props.title}</h2>
            <span>price : {props.price}</span>
            <p>descreption : {props.description}</p>
        </div>
    )
}