import React, { useState } from "react";
import App from "../App";
import Form from "./FormModal";

function Data() {
    const [kblist, setkblist] = useState([]);
    const [value, setvalue] = useState({ type: '', assigned: '', progress: '' });
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            {modalOpen ? <Form modalOpen={setModalOpen} kblist={kblist} value={value} setkblist={setkblist} setvalue={setvalue} />
                :
                <App modalOpen={setModalOpen} kblist={kblist} value={value} />
            }

        </div>
    );
}

export default Data;
