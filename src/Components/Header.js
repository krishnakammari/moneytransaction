import React,{Component} from 'react';
import {Navbar,NavItem,NavbarToggler,NavbarBrand,Nav, Collapse} from 'reactstrap';

class Header extends Component{

    render(){
        return(
            <React.Fragment>
                <Navbar >
                    <div  className="text-center  navbar  ">
                    <h2>Bank-Money Transaction Application</h2>
                    
                    <h7 className="text-light">   -Krishna Vamshi Kammari</h7>
                   
                    
                    </div>
                
                </Navbar>
            </React.Fragment>
        );
    }

}
export default Header;