import React, { Component } from "react";
import data from "./MemberInfo";
import TeamMember from "./TeamMember";



class Team extends Component{
    constructor (){
        super()
        this.state ={
            info : data ,
        }
    }

    mapping(x){
        const members =  x.map(member =>
            <TeamMember 
                key={member.id}
                img={member.img}
                name={member.name}
                nick={member.nick}
                address={member.address}
                email={member.email}
                phone={member.phone}
                website={member.website}
                />
            
        );
        return members;
    }
        render(){
   
        return (
            <div className="row" >
                {this.mapping(this.state.info)}
            </div>
        );
    }
}

export default Team;