import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { isFocusable } from "@testing-library/user-event/dist/utils";

function Lists({ setList, list, setAdd }) {
  // const [click, setClick] = useState(false);

  const addClick = (index) => {

    console.log(index);
    setList((prevValue) => {
      const updatedTodos = [...prevValue];
      updatedTodos[index].checked = !updatedTodos[index].checked;
      //wait oru min
      return updatedTodos;
    });
  };
  console.log(list);
  // console.log("checked", click);

  const deleteItem = (key) => {
    //  let reducedTodo=[...list];
    //  reducedTodo.splice(key);

    //  setList(reducedTodo);

    let reducedTodo = list.filter((item, index) => index !== key);

    setList(reducedTodo);
    console.log(key);
  };
  // console.log(index);

  return (
    <div style={{ marginTop: 15, width: "75%" }}>
      {list.map((item, index) => (
        <>
          <div style={{ borderBottom: "1px solid grey", padding: "1px" }}>
            {/* <Checkbox sx={{ display: "inline-block"}} onClick={addClick}/> */}
            <input
              checked={item.checked}
              style={{ display: "inline-block" }}
              type="checkbox"
              onChange={() => addClick(index)}
            />
            <p
              style={{
                display: "inline-block",
              }}
              // onClick={()=>{addClick(index)}}//entaa
            >
              {item.todo}
            </p>

            {/* alsdf item ille ath {} aakum athile oru item aan todo ath matram kitaan enthaakum, helloo.. ,
              pinnee, ee . idumbom ellam recommendation veroola coz we are using js, ok?? mm mm ok,vaki cheyy 
              ini checked entoo cheyyandeehaa
            */}
            <IconButton
              style={{ display: "inline-block", float: "right" }}
              aria-label="delete"
            >
              <DeleteIcon onClick={() => deleteItem(index)} />
            </IconButton>
          </div>
        </>
      ))}
    </div>
  );
}

export default Lists;
