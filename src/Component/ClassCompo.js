import { Component } from "react";
import "../App.css"

class ClassCompo extends Component{
    render(){
        return(
            <>
            <div className="box" id="box2">
                <h2 className="line1">This is created using Class Components.</h2>
                <p>This is Done by using External CSS.</p>
                <p className="line3">This is Done by using Inline CSS.</p>
             </div>
     </> 
        )
    }
}
export default ClassCompo