import { Fragment } from "react";
import { useContext } from "react";
import VoteContext from "../../store/vote-context";

const MonitorList=props=>{
    const voteCtx =useContext(VoteContext)
    return<Fragment>
        <div>
            <h2>Jonathan</h2>
            <p>Total:{voteCtx.JonathanVotes}</p>
            <ul></ul>
        </div>
        <div>
            <h2>Bob</h2>
            <p>Total:{voteCtx.BobVotes}</p>
            <ul></ul>
        </div>
        <div>
            <h2>Mike</h2>
            <p>Total:{voteCtx.MikeVotes}</p>
            <ul></ul>
        </div>
    </Fragment>
        

    
}

export default MonitorList;