import React from "react";

function SocialItem (props){


    return (
        <div  className="list-group-item clo-md-4  col-sm-6 border  ">
            <li>
                        <img src={props.obj.img} alt={`icon of ${props.obj.site}`}/>
                        <input type="checkbox" id={props.obj.id}/>
                        <label htmlFor={props.obj.id}> {props.obj.site} </label>
            </li>
        </div>
    );
} 
export default SocialItem