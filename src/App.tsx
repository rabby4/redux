import {
	decrement,
	// increment,
	incrementByValue,
} from "./redux/features/countSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
	const count = useAppSelector((state) => state.counter.count)
	const dispatch = useAppDispatch()

	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="flex border border-purple-200 rounded-md bg-slate-50 p-10">
				<button
					onClick={() => dispatch(incrementByValue(5))}
					className="px-3 py-2 rounded-md bg-green-600 text-xl font-semibold text-white"
				>
					Increment
				</button>
				{/* <button
					onClick={() => dispatch(increment())}
					className="px-3 py-2 rounded-md bg-green-600 text-xl font-semibold text-white"
				>
					Increment
				</button> */}
				<h1 className="text-3xl mx-10">{count}</h1>
				<button
					onClick={() => dispatch(decrement())}
					className="px-3 py-2 rounded-md bg-red-600 text-xl font-semibold text-white"
				>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default App
