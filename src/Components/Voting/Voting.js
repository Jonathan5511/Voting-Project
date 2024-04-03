import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import VoteContext from "../../store/vote-context";
import Card from "../UI/Card";
import classes from './Voting.module.css'

const Voting = (props) => {
  const [enteredVoterName, setEnteredVoterName] = useState("");
  const [enteredMonitor, setEnteredMonitor] = useState("Jonathan");

  const voteCtx = useContext(VoteContext);

  const AddVote = (event) => {
    event.preventDefault();
    if (enteredVoterName.trim().length === 0) {
      return;
    }
    voteCtx.addVote({
        id: Math.random().toString(),
        voterName: enteredVoterName,
        monitorName: enteredMonitor,
        amount: 1,
      });

    setEnteredVoterName("");
    setEnteredMonitor("Jonathan");
  };

  const changeVoterNameHandler = (event) => {
    setEnteredVoterName(event.target.value);
  };

  const changeMonitorNameHandler = (event) => {
    setEnteredMonitor(event.target.value);
  };

  return (
    <Modal closeModal={props.onClose}>
        <Card className={classes.input} >
                <form onSubmit={AddVote}>
                    <label htmlFor="name">Student name:</label>
                    <input
                    id="name"
                    type="text"
                    value={enteredVoterName}
                    onChange={changeVoterNameHandler}
                    />
                    <label htmlFor="monitor">Choose Monitor:</label>
                    <select
                    id="monitor"
                    value={enteredMonitor}
                    onChange={changeMonitorNameHandler}
                    >
                    <option>Jonathan</option>
                    <option>Bob</option>
                    <option>Mike</option>
                    </select>
                    <div className={classes.actions}>
                        <button type="submit">Vote</button>
                        <button type="button" onClick={props.onClose}>
                        X
                        </button>
                    </div>
                </form>
      </Card>
    </Modal>
  );
};

export default Voting;