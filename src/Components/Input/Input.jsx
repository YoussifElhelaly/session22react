import { useRef, useState } from "react"

export default function Input() {
    const [value, setValue] = useState("")
    const textInp = useRef()

    return (
        <div>
            <p>{value}</p>
            <input ref={textInp} id="test" type="text" onChange={() => {
                setValue(textInp.current.value)
                console.log(textInp.current.value)
                // console.log(e.target.value)
            }} />
        </div>
    )
}