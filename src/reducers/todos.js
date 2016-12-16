import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions/index';


let nextTodoId = 0;

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false,
        id: (nextTodoId += 1),
      };

    case TOGGLE_TODO:
      if (state.id !== action.index) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(state, action),
      ];

    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action),
      );

    default:
      return state;
  }
};

export default todos;
