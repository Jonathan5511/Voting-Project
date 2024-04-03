import React from "react";

const VoteContext=React.createContext({
    votes:[],
    TotalVotes:0,
    addVote:(vote)=>{},
    removeVote:(id)=>{},
    JonathanVotes:0,
    BobVotes:0,
    MikeVotes:0
})

export default VoteContext;