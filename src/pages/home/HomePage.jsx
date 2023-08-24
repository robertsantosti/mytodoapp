import { CardComponent } from '../../components/card/CardComponent'
import { MockUtils } from '../../utils/mock'

export const HomePage = () => {
  return (
    <div className="HomeContainer">
      <div className="CardsContainer">
        { MockUtils.Todos.map(todo => 
          <CardComponent todo={todo} key={todo.id}/> 
        )}
      </div>
    </div>
  )
}
