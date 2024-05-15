import './TodoCounter.css'
import { Header } from "../../common/header/TodoHeader"

function TodoCounter({ ntask, nCompleted }) {
    return (
        <>

            <div className='row'>
                <div className='col-10'><Header title={'Lista de tareas'} className='p-a m-a subHeader' /></div>
                <div className='col-2'><span>({nCompleted} - {ntask}) </span></div>
            </div>

        </>
    )
}

export { TodoCounter }