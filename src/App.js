import React from "react";
import { useState } from "react";
import Modaleg from "./component/Modaleg";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modaleg setOpenModal={setModalOpen} />}
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Modaleg />
//     </div>
//   );
// }

export default App;
