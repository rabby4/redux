import { configureStore } from "@reduxjs/toolkit"
import countSlice from "./features/countSlice"
import Logger from "./middleware/Logger"

export const store = configureStore({
	reducer: {
		counter: countSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
