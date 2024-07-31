import React, { useMemo, useState } from 'react'

function UseMemo() {
    console.log('UseMemo rendered')
	const [count, setCount] = useState(0)

	const expensiveFunction = () => {
		console.log('Expensive Function Called')
		let sum = 0
		for (let i = 0; i < 1000000000; i++) {
			sum++
		}
		return sum
	}

	const expensiveCalculation = useMemo(() => {
		return expensiveFunction() + count
    }, [count])
    
	return (
		<div>
			<p>
				Count: <span id='incr-cnt'>{count}</span>{' '}
				<button id='incr-btn' onClick={() => setCount((prev) => prev + 1)}>
					+
				</button>
			</p>

			<h1>Expensive Calculation</h1>
			<p id='calc'>{expensiveCalculation}</p>
		</div>
	)
}

export default UseMemo
