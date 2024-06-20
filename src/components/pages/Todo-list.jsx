import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Todo_List = () => {
    // Стан для зберігання списку тудушок
    const [todos, setTodos] = useState([
        { id: 1, text: 'Приклад 1', completed: false },
        { id: 2, text: 'Приклад 2', completed: true },
        { id: 3, text: 'Приклад 3', completed: false }
    ]);

    // Стан для зберігання id тудушки, яку ми редагуємо
    const [editTodoId, setEditTodoId] = useState(null);

    // Стан для зберігання тексту редагованої тудушки
    const [editTodoText, setEditTodoText] = useState('');

    // Функція для зміни стану тудушки (перемикає completed)
    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    // Функція для редагування тексту тудушки
    const editTodo = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setEditTodoId(id);
        setEditTodoText(todoToEdit.text);
    };

    // Функція для збереження змін редагованої тудушки
    const saveEditedTodo = () => {
        const updatedTodos = todos.map(todo =>
            todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
        );
        setTodos(updatedTodos);
        setEditTodoId(null);
        setEditTodoText('');
    };

    // Функція для відміни редагування тудушки
    const cancelEditTodo = () => {
        setEditTodoId(null);
        setEditTodoText('');
    };

    // Функція для видалення тудушки за її id
    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    // Стан для зберігання значення нової тудушки
    const [newTodo, setNewTodo] = useState('');

    // Функція для додавання нової тудушки
    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
            const newTodoObj = { id: newId, text: newTodo, completed: false };
            setTodos([...todos, newTodoObj]);
            setNewTodo('');
        }
    };

    return (
        <div className="todo-list bg-primary d-flex flex-column justify-content-around p-3" style={{width:'700px', margin:'0 auto', borderRadius:'25px'}}>
          <div className="add-todo d-flex justify-content-between">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Введіть нову тудушку"
                    style={{height:'50px',marginBottom:'25px',width:'1000px'}}
                
                />
                <button onClick={addTodo} style={{height:'50px'}}>Додати</button>
            </div>
            {/* Виведення списку тудушок */}
            <ul style={{padding: 0}}>
                {todos.map(todo => (
                    <li key={todo.id} className='d-flex flex-row justify-content-between p-2'>
                        {editTodoId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTodoText}
                                    onChange={(e) => setEditTodoText(e.target.value)}
                                    style={{fontSize:'20px'}}
                                    className='bg-warning'
                                />
                                <div className='div'>
                                    <button onClick={saveEditedTodo}><i class="bi bi-pencil-square"></i></button>
                                    <button onClick={cancelEditTodo}><i class="bi bi-x-circle"></i></button>
                                </div>
                                
                            </>
                        ) : (
                            <>
                                <span
                                    onClick={() => toggleTodo(todo.id)}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                                >
                                    {todo.text}
                                </span>
                                <div>
                                  <button onClick={() => editTodo(todo.id)}><i class="bi bi-pencil-square"></i></button>
                                <button onClick={() => removeTodo(todo.id)}><i class="bi bi-x-circle"></i></button>  
                                </div>
                                
                            </>
                        )}
                    </li>
                ))}
            </ul>

            {/* Форма для додавання нової тудушки */}
            
        </div>
    );
};

export default Todo_List;
