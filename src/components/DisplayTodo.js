import React from 'react';
import { connect } from 'react-redux';
import {
  addTodos,
  removeTodos,
  completeTodos,
  updateTodos
} from '../redux/reducer';
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj))
  };
};

const DisplayTodo = (props) => {
  return (
    <div className='w-full'>
      <ul>
        <li className='flex flex-wrap justify-center gap-10'>
          {props.todos.length > 0 ? props.todos.map((todo) => {
            return(
              <TodoItem key={todo.id}
              item={todo}
              removeTodo={props.removeTodo}
              completeTodo={props.completeTodo}
              updateTodo={props.updateTodo}
              />
            )
          }) : null }
        </li>
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo)
