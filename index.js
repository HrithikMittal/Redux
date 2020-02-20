// initial state
const initialState = {
  todos: [
    {
      text: "Eat Food"
    },
    {
      text: "Exercose"
    }
  ]
};

// create a simple action type
const ADD_TODO = "ADD_TODO";

// create action creators
function addToDo(text) {
  return {
    type: ADD_TODO,
    payload: text
  };
}

// create some reducers
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state.todos, { text: action.payload }];
    default:
      return state;
  }
}

console.log("Initial State;", initialState);

// make changes to initial state
const action = addToDo("Make it work");
const newState = todoReducer(initialState, action);

console.log(newState);
