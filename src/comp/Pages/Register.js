import React, { useState } from "react";
import { ReactComponent as Thon } from "../../assets/Thon.svg";
import "./reg.css";
import Myacc from "../acc/Myacc";
import Modal from "../Modal/Modal";
import AddData from "../modules/AddData";
import { tName, clear } from "../modules/RegMods";
import { openModal, closeModal } from "../modules/ModalMods";
import { AnimatePresence, motion } from "framer-motion";

const Reg = () => {
  const [team, setTeam] = useState(3);
  const members = [];
  for (let i = 0; i < team; i++) {
    members.push(<div>Team Member {i + 1}</div>);
  }
  const [data, setData] = useState([
    {
      id: 0,
      name: "",
      email: "",
      rollno: "",
      branch: "",
      teamName: "",
      teamSize: 3,
      leader: true,
    },
    {
      id: 1,
      name: "",
      email: "",
      rollno: "",
      branch: "",
      leader: false,
    },
    {
      id: 2,
      name: "",
      email: "",
      rollno: "",
      branch: "",
      leader: false,
    },
    {
      id: 3,
      name: "",
      email: "",
      rollno: "",
      branch: "",
      leader: false,
    },
    {
      id: 4,
      name: "",
      email: "",
      rollno: "",
      branch: "",
      leader: false,
    },
  ]);
  const [button1Flag, setButton1Flag] = useState(false);
  const [button2Flag, setButton2Flag] = useState(false);
  const [button3Flag, setButton3Flag] = useState(false);

  const clickHandler = (buttonNum) => {
    setButton1Flag(0);
    setButton2Flag(0);
    setButton3Flag(0);
    setTeam(buttonNum + 2);
    if (buttonNum === 1) {
      setButton1Flag(!button1Flag);
    } else if (buttonNum === 2) {
      setButton2Flag(!button2Flag);
    } else if (buttonNum === 3) {
      setButton3Flag(!button3Flag);
    }
  };
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    clear(data, setData, team);
    console.table(JSON.parse(JSON.stringify(data)));
    AddData(data);
  };
  let i = 0;

  const variants = {
    enter: {
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
    exit: {
      transition: { staggerChildren: 0.5, staggerDirection: 1 },
    },
  };

  return (
    <div className="reg-container">
      <div className="side">
        <Thon className="thon" />
      </div>
      <form id="my-form" className="form" onSubmit={onSubmit}>
        <div className="size">
          <h1>Team Size</h1>
          <div className="size-btn">
            <p
              className={"team-size" + (button1Flag ? " bg-green" : "")}
              onClick={() => clickHandler(1)}
            >
              3
            </p>
            <p
              className={"team-size" + (button2Flag ? " bg-green" : "")}
              onClick={() => clickHandler(2)}
            >
              4
            </p>
            <p
              className={"team-size" + (button3Flag ? " bg-green" : "")}
              onClick={() => clickHandler(3)}
            >
              5
            </p>
          </div>
        </div>
        <div className="team-details">
          <input
            className="team-name"
            required
            type="text"
            placeholder="Team Name"
            value={data[0].teamName}
            onChange={(e) => tName(e, 0, data, setData)}
          ></input>
          <AnimatePresence>
            <motion.div
              variants={variants}
              initial="exit"
              animate="enter"
              exit="exit"
            >
              {members.map((curr) => {
                return (
                  <Myacc
                    key={i + 1}
                    name={curr.props.children[1]}
                    data={data}
                    setData={setData}
                    id={i++}
                  />
                );
              })}
              <button
                className="submit-form"
                type="button"
                onClick={() => openModal(data, setData, setShowModal, team)}
              >
                Submit
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        {showModal && (
          <Modal
            closeModal={() => closeModal(setShowModal)}
            data={data}
            team={team}
          />
        )}
      </form>
    </div>
  );
};

export default Reg;
