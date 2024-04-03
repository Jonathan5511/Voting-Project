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
    if(action.type==="ADD"){
        let updatedJonathanVotes
        let updatedBobVotes
        let updatedMikeVotes
        const updatedTotalVotes = state.TotalVotes+1;
        if(action.votes.monitorName==='Jonathan'){
            updatedJonathanVotes=state.JonathanVotes+1;
        }
        if(action.votes.monitorName==='Bob'){
            updatedBobVotes=state.BobVotes+1;
        }
        if(action.votes.monitorName==='Jonathan'){
            updatedMikeVotes=state.MikeVotes+1;
        }
        const updatedvotes = state.votes.concat(action.vote)

        return{
            votes:updatedvotes,
            TotalVotes:updatedTotalVotes,
            JonathanVotes:updatedJonathanVotes,
            BobVotes:updatedBobVotes,
            MikeVotes:updatedMikeVotes,
        };
    }
    if(action.type==="REMOVE"){

    }
    return defaultVoteState;
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