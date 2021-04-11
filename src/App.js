import React, { useEffect } from "react";

import InputField from "./components/InputField";
import TodosList from "./components/TodoList";
import { deleteAll, persistTodos } from "./Redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
