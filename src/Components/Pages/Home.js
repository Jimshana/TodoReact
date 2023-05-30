import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Search from "../Searchbar/Search";
import Heading from "../Heading/Heading";
import Lists from "../List/Lists";

function Home() {
  const [add, setAdd] = useState("");
  const [list, setList] = useState([]);
  // console.log(add);
  //Here store the temp as an object like {todo:temp,checked:false}

  // const addTodo = () => {
  //   let temp = list;
  //   temp.push(add);
  //   setList(temp);
  //   setAdd("");
  // };
  // console.log(list);

  const addTodo = () => {
    setList([...list, { todo: add, checked: false }]); //yes ee error entha verathe nokeni, atha refresh akaan paranje.anka ariyo list log cheyth nok
    setAdd("");
  };

  console.log(list);//doo map cheyyinodth nok apom kittum
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: "#F5F5F5",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 15,
          borderRadius: 5,
          borderWidth: 3,
          borderColor: "#000000",

          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <Heading />
        <Search
          setAdd={setAdd}
          setList={setList}
          addTodo={addTodo}
          add={add}
          list={list}
        />

        <Lists setList={setList} list={list} setAdd={setAdd} />
      </Box>
    </Grid>
  );
}

export default Home;
