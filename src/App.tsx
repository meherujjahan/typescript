import React, { useCallback, useReducer, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';



interface Todo {
  id: number;
  text: string;
 email:string;
}
type ActionType =
  | {type: "Add"; 
  text: string;
  email:string;
  }
   | 
  {type:"Remove";
   id:number
  };

function App() {
  const [details, setDetails] = useState<Todo>();

  
  
  const [todos, dispatch] = useReducer((state:Todo[], action:ActionType)=>{
    switch(action.type){
      case"Add":
      return [
        ...state,
        {
          id:state.length,
          text:action.text,
          email:action.email,
        },
      ];
      case "Remove":
        return state.filter(({id}) => id !== action.id);
    }
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(()=>{
    if(newTodoRef.current){
      dispatch({
        type:"Add",
        text:newTodoRef.current.value,
        email:newTodoRef.current.value,
      });
      newTodoRef.current.value="";
    }
  },[]);
  return (
    <div className="App">
      <Typography sx={{mt:5}} variant="h4" gutterBottom component="div">
       Please!!!! Form Fill Up..
      </Typography>
      {/* <TextField inputRef={newTodoRef} sx={{width:'65%', mt:5}} id="outlined-basic" label="Full name" variant="outlined" /> */}
      <TextField inputRef={newTodoRef} sx={{width:'65%', mt:3}} id="outlined-basic2" type="email" label="Your Name" variant="outlined" />
      <br/>
      <Button onClick={onAddTodo} sx={{mt:2}} variant="contained">Add</Button>

      {
        todos.map((todo)=>(
         <div key={todo.id}>
          <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <Card sx={{width:'30%',alignItems: 'center',alignContent: 'center', minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       ID: {todo.id}
        </Typography>
        <Typography variant="h5" component="div">
        name: {todo.text}<br/>
        
        </Typography>
        <Button
          sx={{mt:2}} variant="contained"
         onClick={()=> dispatch({
           type:"Remove", id:todo.id
         })} 
         >Remove</Button> 
      </CardContent>
     
    </Card>
  </Grid>
 
</Grid>
</div>
           
        
          
        
        ))}
    </div>
  );
}

export default App;
