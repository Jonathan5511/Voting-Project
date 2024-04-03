import { useState } from "react";
import Voting from "./Components/Voting/Voting";
import TotalVoting from "./Components/Voting/TotalVoting";
import MonitorList from "./Components/Voting/MonitorList";
import VoteProvider from "./store/voteProvider";

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
      <h1>Class Monitor Vote</h1>
      <TotalVoting/>
      <button type="button" onClick={showVotingHandler}>Add New Vote</button>
      {showVotingonScreen && <Voting onClose={hideVotingHandler}/>}
      <MonitorList/>
    </VoteProvider>
  )
  
}

export default App;
