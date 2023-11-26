export default function Form() {

    function formdata(e) {
        e.preventDefault()
        console.log(e.target)
        const fd = new FormData(e.target)
        fetch("/dsa", {
            method: "Post",
            body: fd
        })
        console.log(fd)
    }

    return (
        <form onSubmit={formdata}>
            <input type="" value={1} name="test" />
            
            <input type="checkbox" value={3} name="test" />
            <input type="checkbox" value={2} name="test" />
            <input type="checkbox" value={5} name="test" />
            <input type="checkbox" value={4} name="test" />
            <input type="input" name="dd" />
            <input type="submit" />
        </form>
    )
}