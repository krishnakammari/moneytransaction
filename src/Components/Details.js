import React,{Component} from 'react';
import DATA from '../Shared/data';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class Details extends Component{
    constructor(){
        super();
        this.state={
            after:0,
            accno:0
        }
    }
    
    render(props){

        const submited=(after,accno)=>{
            try{

                const n3=parseInt(DATA[this.props.location.states.data.id].currentbalance);
                const n1=parseInt(after);
                var ids;
                for(ids=0;ids<=9;ids++)
                {
                    if(DATA[ids].Accno===accno)
                    break;
                }



                const n2=parseInt(DATA[ids].currentbalance);

                

                DATA[this.props.location.states.data.id].currentbalance=n3-n1;
                
                
                DATA[ids].currentbalance=n2+n1;
                console.log(DATA[ids]);

            }
            catch(err)
            {
                console.log(err);
            }

            

        }

        const alertt=(p)=>{
            if(p<0)
                {
                    alert("Insufficient Amount");
                }
        }
        return(
            <div>

            
            <div className=" row single mt-5 ">

                {console.log(DATA[this.props.location.states.data.id])}
                <div className="col-8 col-md-6 mt-3">
                    <div className="card shadow-lg rounded">
                        
                        <div className="card-body">
                            
                            <h5 className="card-title">Account Holder Name: <span className="text-primary">{this.props.location.states.data.name}</span></h5>

                            <h6>Account Number: <span className="text-info">{this.props.location.states.data.Accno}</span></h6>
                            <h6>Place/Location: <span className="text-info">{this.props.location.states.data.place}</span></h6>
                            <h6>Bank: <span className="text-info">{this.props.location.states.data.bankname}</span></h6>
                            <h6>Available Balance: <span className="text-info">{this.props.location.states.data.currentbalance}</span></h6>
                            <h6>After Transfer: <span className="text-danger">{parseInt(DATA[this.props.location.states.data.id].currentbalance)-parseInt(this.state.after)}</span></h6>
                            {alertt(parseInt(DATA[this.props.location.states.data.id].currentbalance)-parseInt(this.state.after))}


                            {/* <h3>{this.state.after}</h3>
                            <h3>{DATA[this.props.location.states.data.id].currentbalance}</h3> */}

                            <div class="form-group row">
                                <label for="example-number-input" class="col-md-4 col-form-label"><h6 className="text-secondary">Amount to transfer:</h6></label>
                                <div class="col-md-4">
                                    <input class="form-control" type="number" placeholder="Amount" id="example-number-input" onChange={(e)=>this.setState({after:e.target.value})}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="example-number-input" class="col-md-4 col-form-label"><h6 className="text-secondary">To :</h6></label>
                                <div class="col-md-4">
                                    <input class="form-control" type="number" placeholder="Account Number" id="example-number-input" onChange={(e)=>this.setState({accno:e.target.value})}/>
                                </div>
                            </div>

                            <div className="text-center ">

                            
                            
                            <div>
                            <Link to={{pathname:`/home}`}}>
                                <button class="btn btn-primary btnn" onClick={()=>submited(this.state.after,this.state.accno)} data-toggle="modal" data-target="#myModal">
                                    Transfer
                                </button>  

                            </Link> 
                            </div>
                             <div>
                            <Link to={{pathname:`/home}`}}>
                                <button class="btn btn-success btnn shadow-sm" >
                                    Home
                                </button>
                            </Link>
                            </div>
                            </div>
                            
                            
                        </div>
                        

                        <div>
                        

                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Details;