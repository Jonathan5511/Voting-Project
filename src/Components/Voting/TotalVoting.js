import { Fragment, useContext } from "react";
import VoteContext from "../../store/vote-context";
import classes from './TotalVoting.module.css'
import Card from "../UI/Card";

const TotalVoting=props=>{
    const voteCtx=useContext(VoteContext);
    return <Fragment>
            <Card className={classes.p}>
                <p>Total Voting:{voteCtx.TotalVotes}</p>
            </Card>
    </Fragment>
    
}

export default TotalVoting;