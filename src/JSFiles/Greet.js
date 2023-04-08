import { Button, colors, CardHeader } from "@mui/material";
import React,{ useState } from "react";
const DefaultFunction = (...args) => {
  // const value = ...args;
  const [username, setUsername]=useState();
  const [isValid, setIsValid]=useState(false);
  React.useEffect(() => {
    console.log(username);
    if(username === "aaa"){
      setIsValid((prev) => !prev);
    }
  }, [username])
  return(
      <div name= "RootContainer" className="rootContainer">
        <div>
        <label className="label-username"><span style={{color:"red"}}>Username</span></label>
        <input className="username" id="Uname" name="username" type="text" onChange={(e) => setUsername(e.target.value)} 
        style={
          
            {color: isValid? 'black':'red',borderWidth:1}
        
      }
        ></input>
        </div>
        <div>
        <label className="label-password"><span style={{color:"red"}}>Password</span></label>
        <input className="password" id="pass" name="password" type="text"></input>
        </div>
        <button type="button" name="submit" className="submit"> SUBMIT</button>
      </div>
  )
};


export default DefaultFunction;