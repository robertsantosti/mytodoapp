import { Outlet, useNavigate } from "react-router-dom"
import { HeaderComponent } from "../components/header/HeaderComponent"
import { ButtonComponent } from "../components/button/ButtonComponent"

export const AppLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('todo');
  }

  return (
    <div className="Layout">
      <HeaderComponent/>

      <main className="Main">
        <div className="ActionsContainer">
          <ButtonComponent onClick={handleClick}>Criar Tarefa</ButtonComponent>
        </div>

        <section className="MainContainer">
          <Outlet/>
        </section>
      </main>
    </div>
  )
}
