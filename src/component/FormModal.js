import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import App from "../App";
import './modaleg.css'
function Form(props) {
    const [counter, setcounter] = useState(1);
    const handleclick = () => {
        props.setkblist((kblist) => {
            const show = [...kblist, props.value]
            return show
        })
    }
    console.log('kblist from modal', props.kblist, 'value', props.value)
    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                props.setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="title">
                        <h1>Hansel {counter}</h1>
                    </div>
                    <div>
                        <form>
                            <label htmlFor="type">Type : </label>
                            <select id="type" name="type" onChange={(event) => {
                                const oldvalues = JSON.parse(JSON.stringify(props.value));
                                oldvalues.type = event.target.value;
                                props.setvalue(oldvalues)
                            }}>
                                <option value="Story">Story</option>
                                <option value="Bug">Bug</option>
                                <option value="Task">Task</option>
                            </select>

                            <br /> <br />
                            <label htmlFor="assigned">Assigned To : </label>
                            <select id="assigned" name="assigned" onChange={(event) => {
                                const oldvalues = JSON.parse(JSON.stringify(props.value));
                                oldvalues.assigned = event.target.value;
                                props.setvalue(oldvalues)
                            }}>
                                <option value="Harshali Shewale">Harshali Shewale</option>
                                <option value="Varsha Kotwal">Varsha Kotwal</option>
                                <option value="Ruchi Gupta">Ruchi Gupta</option>
                            </select>

                            <br /> <br />
                            <label htmlFor="progress">Progress : </label>
                            <select id="progress" name="progress" onChange={(event) => {
                                const oldvalues = JSON.parse(JSON.stringify(props.value));
                                oldvalues.progress = event.target.value;
                                props.setvalue(oldvalues)
                            }}>
                                <option value="inprogress">In Progress</option>
                                <option value="to do">To Do</option>
                                <option value="completed">Completed</option>
                            </select>

                        </form>
                    </div>
                    <div className="footer">
                        <button
                            onClick={() => {
                                props.setOpenModal(false);
                            }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>
                        <button onClick={() => {
                            setcounter(counter + 1);
                            handleclick();
                            props.modalOpen(false);

                        }}
                            id="createBtn">Create</button>

                        {/* <div>{kblist.map((value, index) => {
                        return (<div key={index}>{value.type},{value.assigned},{value.progress}</div>)
                    })}</div> */}
                    </div>

                </div>
            </div></>
    );
}
export default Form;