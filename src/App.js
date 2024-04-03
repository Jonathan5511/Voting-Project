import { useState } from "react";
import Voting from "./Components/Voting/Voting";
import TotalVoting from "./Components/Voting/TotalVoting";
import MonitorList from "./Components/Voting/MonitorList";
import VoteProvider from "./store/voteProvider";
import classes from './App.module.css'

function App() {
  const [showVotingonScreen,setShowVotingOnScreen]=useState(false);

  const showVotingHandler=()=>{
    setShowVotingOnScreen(true);
  }

  const hideVotingHandler=()=>{
    setShowVotingOnScreen(false);
  }

  return (
    <VoteProvider>
      <h1 className={classes.header}>Class Monitor Vote</h1>
      <TotalVoting/>
      <div className={classes.actions}>
        <button type="button" onClick={showVotingHandler}>Add New Vote</button>
      </div>
      {showVotingonScreen && <Voting onClose={hideVotingHandler}/>}
      <MonitorList/>
    </VoteProvider>
  )
  
}

export default App;
