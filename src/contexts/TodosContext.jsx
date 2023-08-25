import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const TodosContext = createContext({
  todos: [],
  setTodos: () => {},
})

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{todos, setTodos}}>
      { children }
    </TodosContext.Provider>
  )
}

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired
}
