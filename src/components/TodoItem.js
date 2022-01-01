import React, { useRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoItem = (props) => {

  const {item, removeTodos, completeTodos, updateTodos} = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    console.log(inputRef.current)
    inputRef.current.disabled = false;
    inputRef.current.forcus();
  };

  const update = (id, value, e) => {
    if(e.which === 13){
      updateTodos({id, item: value});
      inputRef.current.disabled = true;
    }
  };

  return (
    <div className='w-1/5 h-1/3'>
      <div className='grid grid-rows-3 p-3 rounded-md bg-white/50'>
        <textarea className='w-full row-span-2 border border-gray-400' ref={inputRef} disabled={inputRef} defaultValue={item.item}
            onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/>
        <div className='flex justify-end'>
          <div className='h-full w-10 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-gray-300'>
            <Checkbox {...label} onClick={() => {completeTodos(item.id)}}/>
          </div>
          <div className='h-full w-10 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-gray-300'>
            <EditIcon onClick={() => {changeFocus();}}/>
          </div>
          <div className='h-full w-10 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-gray-300'>
            <DeleteIcon onClick={() => {removeTodos();}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem

