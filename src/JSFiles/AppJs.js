export const MyFunction = () => {
    return (<div>
        <textarea placeholder="Username"></textarea>
        <div>
            <textarea placeholder="Password"></textarea>
        </div>
        <button onClick={popup}>OK</button>
    </div>)
};

const popup = ()=>{

    return alert("this is a popup")
}