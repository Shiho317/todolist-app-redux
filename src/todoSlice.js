import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from './firebase';

export const fetchTasks = createAsyncThunk('lists/getAlllists', async()=>{
  const res = await db.collection('lists').get();

  const allTodos = res.docs.map((doc) => ({
    id: doc.id,
    todo: doc.data().todo,
    completed: doc.data().completed
  }))

  const todoNumber = allTodos.length;
  const passData = { allTodos, todoNumber };
  return passData;
});

export async function createTodoFunc(todo){
  try{
    await db.collection('lists').add({
      todo: todo,
      completed: false,
    })
  } catch(error) {
    console.error('error');
  }
};

export async function deleteTodoFunc(id){
  try{
    await db.collection('lists').doc(id).delete();
  } catch(error) {
    console.error('error');
  }
};
