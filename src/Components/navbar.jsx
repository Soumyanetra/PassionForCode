import React from 'react';
const navBar= ({totalCounters})=>{
    return ( 
        <React.Fragment> 
            <nav >
                <h1 className="scrhndl">
                    SCORE HANDLER
                </h1>
            </nav>
            <br/><br/><p>PARTICIPANTS:{" "}<b>{totalCounters}</b></p>
        </React.Fragment>
        );
}

//this.props work only in functions
//passing props as a parameter and later using props.totalCounters is a solution 
//we can aslo destructure out parameter to simplify the code further, as done above

/*
as this component has no state, this is a stateless component and such components can also be defines as functions. 
Done above

import React, { Component } from 'react';
import Counter from './counter'
class navBar extends Component {
    render() { 
        return (  
            <nav className="navbar navbar-light bg-light">
                <div>NAVBAR{" "}
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </div>
            </nav>
        );
    }
}*/
 
export default navBar;