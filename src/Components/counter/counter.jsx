import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    console.log(count)

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                if (count > 0) {

                    setCount(count - 1)
                }
            }}>-</button>
        </div>
    )
}