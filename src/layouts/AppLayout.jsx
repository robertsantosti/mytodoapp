import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <div className="Layout">
      {/* TODO: Subistituir por componente header posteriormente */}
      <header>Header da aplicação</header>

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
