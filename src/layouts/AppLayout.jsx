import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { HeaderComponent } from "../components/header/HeaderComponent"
import { ButtonComponent } from "../components/button/ButtonComponent"

export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const route = location.pathname.includes('/todo') ? '/' : '/todo';
    navigate(route);
  }

  return (
    <div className="Layout">
      <HeaderComponent/>

      <main className="Main">
        <div className="ActionsContainer">
          <ButtonComponent onClick={handleClick}>
            { location.pathname.includes('/todo') ? 'Ver Tarefas' : 'Nova Tarefa' }
          </ButtonComponent>
        </div>

        <section className="MainContainer">
          <Outlet/>
        </section>
      </main>
    </div>
  )
}
