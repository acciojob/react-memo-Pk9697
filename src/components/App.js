import React, { useMemo, useState } from 'react'
import ReactMemo from './ReactMemo'
import UseMemo from './UseMemo'

function App() {
    console.log('App rendered')
	const [todos, setTodos] = useState([])

	return (
		<div id='main'>
			<h1>React.useMemo</h1>
			<h1>My todos</h1>
			<ul>
				{todos.map((todo, index) => (
					<li key={index} id={`todo-${index}`}>
						{todo}
					</li>
				))}
			</ul>
			<button
				id='add-todo-btn'
				onClick={() => setTodos((prev) => [...prev, 'New Todo'])}
			>
				Add Todo
			</button>
			<hr />
			<UseMemo />
			<hr />
			<hr />
			<ReactMemo />
		</div>
	)
}

export default App
