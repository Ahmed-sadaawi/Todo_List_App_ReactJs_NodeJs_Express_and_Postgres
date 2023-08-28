/* بسم الله الرحمن الرحيم */

import {useState} from "react";
import PropTypes from "prop-types";
import "./Modal.css";

export function Modal({id, description, setShowModal, setNoMoreRender}) {
    const [theDescription, setTheDescription] = useState(description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setShowModal(false);
            setNoMoreRender(false);
            await Update(id, theDescription);

        } catch (error) {
            console.log("Cannot Update frontend" + error)
        }
    }

    const Update = async (id, theDescription) => {
        const body = {description: theDescription};
        try {
            return await fetch('http://localhost:8000/tasks/'+id, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(body)
            });
        }
        catch (error) {
            console.log( error)
        }
    }

    const handleClick = () => {
        setShowModal(false)
    }
    return (
        <div className="wrapper-modal">
            <div className="modal">
                <div className="x-cancel">
                    <span onClick={handleClick}>x</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Edit a task:</h2>
                        <input
                            type="text"
                            onChange={(event) => setTheDescription(event.target.value)}
                            value={theDescription}
                        />
                    </label>
                    <div className="buttons">
                        <button type="submit" className="submit">Update</button>
                        <button className="cancel" onClick={handleClick}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Modal.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    setShowModal: PropTypes.bool.isRequired,
    setNoMoreRender: PropTypes.bool.isRequired
}

/* الحمد لله رب العالمين */