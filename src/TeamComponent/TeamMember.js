import React, { Component } from "react";

class TeamMember extends Component{
    render(){
        return (
        <div className="clo-md-4 col-sm-4 container " >
                        <div className="card" style={{
                                                backgroundColor: this.props.website ? "white" : "gray" }}>  
                            <div className="card-header">
                                <img src={this.props.img} style={{maxWidth:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{`Name: ${this.props.name} ${this.props.nick}`}</h3>
                                <p>{`Address: ${this.props.address}`}</p>
                                <div style={{color:this.props.email ? "blue" : "red"}}>{`Email: ${this.props.email}`}</div>
                                <div>{`Phone Number: ${this.props.phone}`}</div>
                                <div>{`Website: ${this.props.website}`}</div>
                            </div>    
                        </div>
        </div>
    )
    }
}

export default TeamMember