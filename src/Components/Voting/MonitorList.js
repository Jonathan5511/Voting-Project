import { Fragment } from "react";
import { useContext } from "react";
import VoteContext from "../../store/vote-context";

const MonitorList=props=>{
    const voteCtx =useContext(VoteContext)
    const JonathanV = voteCtx.votes.filter((vote)=>vote.monitorName==='Jonathan')
    const BobV = voteCtx.votes.filter((vote)=>vote.monitorName==='Bob')
    const MikeV = voteCtx.votes.filter((vote)=>vote.monitorName==='Mike')

    
    return<Fragment>
        <div>
            <h2>Jonathan</h2>
            <p>Total:{voteCtx.JonathanVotes}</p>
            <ul>
                {JonathanV.map(voters=><li key={voters.id}>
                    {voters.voterName} <button type='button' onClick={()=>voteCtx.removeVote({id:voters.id,mName:voters.monitorName})}>Delete</button>
                </li>)}
            </ul>
        </div>
        <div>
            <h2>Bob</h2>
            <p>Total:{voteCtx.BobVotes}</p>
            <ul>
            {BobV.map(voters=><li key={voters.id}>
                    {voters.voterName} <button type='button' onClick={()=>voteCtx.removeVote({id:voters.id,mName:voters.monitorName})}>Delete</button>
                </li>)}
            </ul>
        </div>
        <div>
            <h2>Mike</h2>
            <p>Total:{voteCtx.MikeVotes}</p>
            <ul>
            {MikeV.map(voters=><li key={voters.id}>
                    {voters.voterName} <button type='button' onClick={()=>voteCtx.removeVote({id:voters.id,mName:voters.monitorName})}>Delete</button>
                </li>)}
            </ul>
        </div>
    </Fragment>
        

    
}

export default MonitorList;