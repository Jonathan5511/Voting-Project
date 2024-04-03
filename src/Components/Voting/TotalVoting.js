import { Fragment, useContext } from "react";
import VoteContext from "../../store/vote-context";

const TotalVoting=props=>{
    const voteCtx=useContext(VoteContext);
    return <Fragment>
        <p>Total Voting:{voteCtx.TotalVotes}</p>
    </Fragment>
}

export default TotalVoting;