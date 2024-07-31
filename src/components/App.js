import React, { useMemo, useState } from 'react'

function App() {
	const [todos, setTodos] = useState([])
	const [count, setCount] = useState(0)
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState('')
	const expensiveCalculation = useMemo(() => {
		return 1000000000
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		setTasks((prev) => [...prev, task])
		setTask('')
	}

	return (
		<div id='main'>
			<h1>React.useMemo</h1>
			<h1>My todos</h1>
			<ul>
				{todos.map((todo, index) => (
					<li key={index} id={`todo-${index}`}>{todo}</li>
				))}
			</ul>
			<button
				id='add-todo-btn'
				onClick={() => setTodos((prev) => [...prev, 'New Todo'])}
			>
				Add Todo
			</button>
			<hr />
			<p>
				Count: {count}{' '}
				<button id='incr-cnt' onClick={() => setCount((prev)=>prev + 1)}>
					{count}
				</button>
			</p>

			<h1>Expensive Calculation</h1>
			<p>{expensiveCalculation}</p>
			<hr />
			<hr />
			<h1>React.memo</h1>
			<form onSubmit={handleSubmit}>
				<input
					id='skill-input'
					type='text'
					value={task}
					onChange={(e) => setTask(e.target.value)}
					required
					minLength='5'
				/>
				<button
					id='skill-btn'
					type='submit'
					// onClick={() => setTasks((prev) => [...prev, task])}
				>
					Add Skill
				</button>
			</form>
			<ul>
				{tasks.map((task, index) => (
					<li key={index} id={`item-${task}`}>{task}</li>
				))}
			</ul>
		</div>
	)
}

export default App
