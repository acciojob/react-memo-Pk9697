import React, { useEffect, useState } from 'react'

const ReactMemo=React.memo(()=> {
    console.log('ReactMemo rendered')
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setTasks((prev) => [...prev, task])
		setTask('')
	}

	return (
		<div>
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
					<li key={index} id={`item-${task}`}>
						{task}
					</li>
				))}
			</ul>
		</div>
	)
})

export default ReactMemo
