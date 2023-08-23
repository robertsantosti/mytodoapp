import { MdPerson } from 'react-icons/md'

export const HeaderComponent = () => {
  return (
    <header className="Header">
      <h1 className="Logo">
        My<span>Todo</span>App
      </h1>

      <div className="ProfileContainer">
        <div className="ProfileIcon">
          <MdPerson/>
        </div>
        <p>Robert Santos</p>
      </div>
    </header>
  )
}
