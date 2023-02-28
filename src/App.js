import { listenerCount } from "process";
import React from "react";
import { useState } from "react";
import Form from "./component/FormModal";
import Modaleg from "./component/Modaleg";

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <div className="App">
//       <h1>Hey, click on the button to open the modal.</h1>
//       <button
//         className="openModalBtn"
//         onClick={() => {
//           setModalOpen(true);
//         }}
//       >
//         Open
//       </button>

//       {modalOpen && <Modaleg setOpenModal={setModalOpen} />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//        </div>
//   );
// }

function App(props) {

  // const getkblist=(kblist)=>{
  //   console.log('kblist app',kblist,'value from App')
  // }
  console.log('kblist app', props.kblist, 'value from App', props.value)
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <h3>Hey, click on the button to create the form.</h3>
      <button
        className="openModalBtn"
        onClick={() => {
          props.modalOpen(true);
        }}
      >
        Create Login Form
      </button>

      {/* {props.modalOpen && <Form setOpenModal={setModalOpen} onCreate={getkblist}/>} */}
      {/* {props.modalOpen} */}
      <br /> <br />
      <ul className="ulmain" id="ul">

        <div id="list">
          <li id="todo">
            To Do
            <ul id="ul">{props.kblist.filter((value) => {
              if (value.progress == "to do") {
                return value;
              }
            })
              .map((value, index) => {
                return (<><li><div>{value.type}</div><div>{value.assigned}</div><div>{value.progress}</div></li></>)
              })}

            </ul>
          </li>
          <li id="inprogress">In Progress  <ul id="ul">{props.kblist.filter((value) => {
              if (value.progress == "inprogress") {
                return value;
              }
            }).map((value, index) => {
            return (<><li><div>{value.type}</div><div>{value.assigned}</div><div>{value.progress}</div></li></>)
          })}

          </ul></li>
          <li id="finished">Finished  <ul id="ul">{props.kblist.filter((value) => {
              if (value.progress == "completed") {
                return value;
              }
            }).map((value, index) => {
            return (<><li><div>{value.type}</div><div>{value.assigned}</div><div>{value.progress}</div></li></>)
          })}

          </ul></li>
        </div>
      </ul>
    </div>
  );
}
export default App;
