import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { connect, useDispatch } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { createTodoFunc, fetchTasks } from '../todoSlice';
import { useForm } from 'react-hook-form';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};


const Todo = (props) => {

  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value)
  };

  const {reset} = useForm();

  const handleCreate = async() => {
    await createTodoFunc(todo);
    reset();
    dispatch(fetchTasks());
  }
  
  const add = () => {
    if(todo === ''){
      alert('There is no input');
    }else{
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
    }
    handleCreate()
    setTodo('');
  };

  return (
  <div className='flex justify-center gap-3 w-1/3 m-auto items-center'>
    <div className='w-full'>
      <TextField className='w-full' id="outlined-basic" label='TO DO LIST' variant="outlined" 
      value={todo} onChange={(e) => {handleChange(e);}}/>
    </div>
    <div className='border-2 border-gray-300 hover:border-black rounded-md flex items-center transition-all duration-300 ease-in-out'>
      <AddIcon className='' onClick={add} />
    </div>
  </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
