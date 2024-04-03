import { useReducer } from "react";
import VoteContext from "./vote-context";

const defaultVoteState={
    votes:[],
    TotalVotes:0,
    JonathanVotes:0,
    BobVotes:0,
    MikeVotes:0
}

const voteReducer=(state,action)=>{
    if (action.type === "ADD") {
        const updatedTotalVotes = state.TotalVotes + 1;
        const monitor = action.vote.monitorName;
        return {
          votes: [...state.votes, action.vote],
          TotalVotes: updatedTotalVotes,
          JonathanVotes:
            monitor === "Jonathan" ? state.JonathanVotes + 1 : state.JonathanVotes,
          BobVotes: monitor === "Bob" ? state.BobVotes + 1 : state.BobVotes,
          MikeVotes: monitor === "Mike" ? state.MikeVotes + 1 : state.MikeVotes,
        };
      }
    if (action.type === "REMOVE") {
        const updatedTotalVotes = state.TotalVotes -1;
        const monitor = action.id.mName;
        const updatedVotes=state.votes.filter(vote=>vote.id!==action.id.id)
        return {
            votes: updatedVotes,
            TotalVotes: updatedTotalVotes,
            JonathanVotes:
              monitor === "Jonathan" ? state.JonathanVotes - 1 : state.JonathanVotes,
            BobVotes: monitor === "Bob" ? state.BobVotes - 1 : state.BobVotes,
            MikeVotes: monitor === "Mike" ? state.MikeVotes - 1 : state.MikeVotes,
          };
    

    }
      return state;
}

const VoteProvider=props=>{
    const [voteState,dispatchVoteAction] = useReducer(voteReducer,defaultVoteState)
    const addItemToVoteHandler=vote=>{
        dispatchVoteAction({type:"ADD",vote:vote})
    }

    const removeItemToVoteHandler=id=>{
        dispatchVoteAction({type:"REMOVE",id:id})
    }

    const voteContext={
        votes:voteState.votes,
        TotalVotes:voteState.TotalVotes,
        JonathanVotes:voteState.JonathanVotes,
        BobVotes:voteState.BobVotes,
        MikeVotes:voteState.MikeVotes,
        addVote: addItemToVoteHandler,
        removeVote: removeItemToVoteHandler
    }

    return(
    <VoteContext.Provider value={voteContext}>
        {props.children}
    </VoteContext.Provider>);
}

export default VoteProvider;