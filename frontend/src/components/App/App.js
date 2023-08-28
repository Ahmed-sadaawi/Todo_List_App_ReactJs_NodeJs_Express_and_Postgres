/* بسم الله الرحمن الرحيم */
/* يا ربي ظني بك جميل ، حاشاك ربي من ان يخيب  */
/* يا ربي حباً في صاحب الخلق العظيم لا تعذبني */
/*=================================*/

import {useEffect, useReducer, useState} from "react";
import Tasks from "../Tasks/Tasks";
import "./App.css";

function App() {
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [noMoreRender, setNoMoreRender] = useReducer(state => !state, false);
    const [alert, setAlert] =useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(description !== ''){ setAlert(false); await addDescription(description);} else setAlert(true);
            setNoMoreRender(true);
            setDescription('');

        }catch (error){console.log(error)}
    }
 
    async function indexing() {
        try{
            const Response = await fetch('http://localhost:8000/tasks');
            const ResponseAsJson = await Response.json();
            return setTodos(await ResponseAsJson);
        }
        catch (error) {
            console.log("الله اكبر"   + error)
        }
    }
    async function addDescription(description) {
        try{
            return  await fetch('http://localhost:8000/tasks',{
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({description})
            }).then(data => data.json());
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(  () => {
        console.log('render');
        indexing();
    }, [noMoreRender]);

  return (
    <div className="App">
        <h2 className="page-title">TO DO LIST</h2>

        <form onSubmit={handleSubmit}>
            <label>
                <p>Add a task:</p>
                {alert && <p style={{color: "red"}}>You can't add an empty task!</p>}

                <input
                    type="text"
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
            </label>

            <button type="submit" className="submit">Add Task</button>
        </form>

        <Tasks
            todos={todos}
            description={description}
            setNoMoreRender={setNoMoreRender}
        />
    </div>
  );
}

export default App;

/* الحمد لله رب العالمين */