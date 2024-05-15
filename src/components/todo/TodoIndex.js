import { React, useState } from 'react'
import { Create } from "../common/button/TodoButton"
import { Header } from "../common/header/TodoHeader"
import { TodoCounter } from "./counter/TodoCounter"
import { TodoItem } from "./item/TodoItem"
import { TodoList } from "./list/TodoList"

function TodoIndex() {
    const localStorageTodos = localStorage.getItem('TODOS_V1');

    let parsedTodos;

    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = useState(parsedTodos);
    const [searchValue, setSearchValue] = useState('');
    const [task, setTask] = useState('');

    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const saveTodos = (newTodos) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
        setTask('');
    };

    const saveNewTodo = () => {
        const newTodos = [...todos]
        newTodos.push({'text': task, completed: false})
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };


    return (
        <>
            <Header title={'TODOs App'} className='p-a bg-color' />
            <div className="container-side">
                <TodoCounter nCompleted={completedTodos} ntask={totalTodos} />
                
                <TodoList>
                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>

            </div>
            <div className="container-side center">
                <Header title={'Crear Nueva Tarea'} className='p-a m-a subHeader' />
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
                <Create title={'Create new task'} className='m-a btn-action' onclick={() => { saveNewTodo(); console.log('create btn')}} />
            </div>
        </>
    )
}

export { TodoIndex }