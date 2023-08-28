/* بسم الله الرحمن الرحيم */

import PropTypes from "prop-types";
import {Modal} from "../Modal/Modal";
import {useState} from "react";
import "./Tasks.css";

function Tasks({todos, setNoMoreRender}) {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState();
    const [description, setDescription] = useState('');
    const handleClickEdit = (id,description) => {
        setShowModal(true);
        setId(id);
        setDescription(description);

    }

    const handleDelete = async (id) => {
        try{
            const res = await fetch(`http://localhost:8000/tasks/${id}`, {method: "DELETE"});
        setNoMoreRender(false)
            return await  res;

        }
        catch (error) {
            console.log(`Frontend error: ${error}`);
        }
    }

    return (
        <div className="wrapper">
            <div className="tasks">
                {todos.map(todo => (
                    <div key={todo.id}>
                        <div className="todo">
                            <h4 >{todo.description}</h4>
                            <div>
                                <button
                                    id={todo.id}
                                    data-description={todo.description}
                                    onClick={(event) => handleClickEdit(event.target.id, event.target.dataset.description)}
                                >Edit
                                </button>
                                <button id={todo.id} onClick={(event) => handleDelete(event.target.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            { showModal &&
                <Modal
                    id={id}
                    description={description}
                    setShowModal={setShowModal}
                    setNoMoreRender={setNoMoreRender}
                />
            }
        </div>
    );
}

Tasks.propTypes = {
    todos: PropTypes.array.isRequired,
    setNoMoreRender: PropTypes.bool.isRequired
}
export default Tasks;

/* الحمد لله رب العالمين */