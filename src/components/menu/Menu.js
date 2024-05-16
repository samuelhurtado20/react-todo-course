import './Menu.css';

function Menu(props) {
    return (
        <ul className='menu-ul'>
            <li className={"menu-li " + (props.menu === 'todo-app' ? 'active' : '')}>
                <a href='#' onClick={() => props.setMenu('todo-app')}>TODOs</a>
            </li>
            <li className={"menu-li " + (props.menu === 'gastos-app' ? 'active' : '')}>
                <a href='#' onClick={() => props.setMenu('gastos-app')}>Gastos</a>
            </li>
        </ul>
    );
}

export { Menu };