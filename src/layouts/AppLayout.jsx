import { Outlet } from "react-router-dom"
import { HeaderComponent } from "../components/header/HeaderComponent"

export const AppLayout = () => {
  return (
    <div className="Layout">
      <HeaderComponent/>

      <main className="Main">
        <div className="ActionsContainer">
          <button>Ação</button>
        </div>

        <section className="MainContainer">
          <Outlet/>
        </section>
      </main>
    </div>
  )
}
