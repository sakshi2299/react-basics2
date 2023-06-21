import { useState } from "react"

const SetDataInLocalStorage = ()=>{
    const [data,setData]=useState('');
    const handleChange = (event)=>{
        setData(event.target.value);
    };
    const handleSubmit= (event)=>{
        event.preventDefault();
        localStorage.setItem('myData',data);
        setData('');
    };
    return(<div>
        <form onSubmit = {handleSubmit}>
            <label>
                Data:
                <input type= "text" value ={data} onChange={handleChange}/>

            </label>
            <button type = "submit">Set Data</button>
        </form>
    </div>);
};
export default SetDataInLocalStorage;
