/* eslint-disable @typescript-eslint/no-explicit-any */
const Logger = (state: any) => (next: any) => (action: any) => {
	console.log("current state =>", state.getState())
	console.log("action", action)
	next(action)
	console.log("next state =>", state.getState())
}

export default Logger
