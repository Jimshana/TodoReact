import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
function Search({setAdd,addTodo,add,setList,list}) {
 const handlebar=(e)=>{
  
  setAdd(e.target.value)
  
 }
//  const handleKeyPress = (event) => {
//   if(event.key === 'Enter'){
//     setAdd(event.target.value)
//   }
// }


  return (
    <div
      style={{
        border: "1px solid #808080",
        padding: "5px",
        width: "400px",

        display: "flex",
        height: "30px",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
     
      <span style={{width:"100%"}}>
        
      
        
        <input
      
          style={{ border: 0, outline: "none",width:"100%"}}
          type={"text"}
          value={add}
          placeholder={"Add Todos"}
          
          onChange={handlebar}
        />
      </span>
      <AddIcon onClick={addTodo} />
    </div>
  );
}

export default Search;
