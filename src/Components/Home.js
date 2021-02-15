import React,{Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import DATA from '../Shared/data'

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }
    

    render(){

        const menu = DATA.map((data) => {
            return (


                

                
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.Accno}</td>
                        <td>{ data.currentbalance}</td>
                        
                        
                        <td>
                            <Link to={{pathname:`/details/${data.id}`,states:{data:data}}}>
                                <button class="btn btn-info">
                                    Transfer
                                </button>

                            </Link>
                        </td>
                    </tr>
                  
                

               
            );
        });

        return(
            <div className="main center container mt-5  ">

            <div className=" form container  ml-2 ">
                <table class="table">
                    <thead class="thead-light">
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Acc No</th>
                        <th>Balance</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>

                         {menu}
                    
                    </tbody>
                </table>
                
                
                

            </div>
            </div>
        );
    }
}
export default Home;