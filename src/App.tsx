import React, { Suspense } from "react";
import { useRoutes, Link } from "react-router-dom";
import { useAppSelector, shallowEqualApp, useAppDispatch } from "./store";
import { incremented, decremented } from "@/store/modules/counter";
import routes from "./router";

function App() {
	const { count } = useAppSelector(
		(state) => ({
			count: state.counter.count,
		}),
		shallowEqualApp
	);

	const dispatch = useAppDispatch();
	function addCount() {
		dispatch(incremented());
	}
	function subCount() {
		dispatch(decremented());
	}

	return (
		<div className='App'>
			<div className='nav'>
				<Link to='/home'>菜单一</Link>
				<Link to='/mine'>菜单二</Link>
			</div>
			<div>count：{count}</div>
			<button onClick={subCount}>-1</button>
			<button onClick={addCount}>+1</button>
			<Suspense fallback='loading...'>
				<div className='main'>{useRoutes(routes)}</div>
			</Suspense>
		</div>
	);
}

export default App;
