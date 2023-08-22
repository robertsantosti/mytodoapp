import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home/HomePage"
import { TodoPage } from "../pages/todo/TodoPage"
import { ErrorPage } from "../pages/error/ErrorPage"
import { AppLayout } from "../layouts/AppLayout"

export const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/todo" element={<TodoPage/>}/>
          <Route path="/todo/:id" element={<TodoPage/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}