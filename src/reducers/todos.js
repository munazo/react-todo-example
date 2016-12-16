import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions/index';


let nextTodoId = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: (nextTodoId += 1),
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todos;
