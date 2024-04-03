import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import VoteContext from "../../store/vote-context";

const Voting =props=>{
    const[enteredVoterName,setEnteredVoterName]=useState('')
    const[enteredMonitor,setEnteredMonitor]=useState('Jonathan')

    const voteCtx = useContext(VoteContext)

    const AddVote=event=>{
        event.preventDefault();
        if(enteredVoterName.trim().length===0){
            return;
        }
        voteCtx.addVote=({
            id:Math.random().toString(),
            voterName:enteredVoterName,
            monitorName:enteredMonitor,
            amount:1
        })
        enteredVoterName('');
        enteredMonitor('Jonathan');
    }

    const changeVoterNameHandler=event=>{
        setEnteredVoterName(event.target.value);
    }

    const changeMonitorNameHandler=event=>{
        setEnteredMonitor(event.target.value);
    }

    return(
        <Modal closeModal={props.onClose}>
            <form onSubmit={AddVote}>
                <label htmlFor="name" value={enteredVoterName}onChange={changeVoterNameHandler}>Student name:</label>
                <input id="name" type="text"/>
                <label htmlFor="monitor" value={enteredMonitor} onChange={changeMonitorNameHandler}>Choose Monitor:</label>
                <select id="monitor">
                    <option>Jonathan</option>
                    <option>Bob</option>
                    <option>Mike</option>
                </select>
                <button type='submit'>Vote</button>
                <button type="button" onClick={props.onClose}>X</button>
            </form>
        </Modal>
    )
}

export default Voting;