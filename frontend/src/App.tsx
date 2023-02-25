import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainNav } from './components/MainNav';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainNav />}>
					<Route path='/' element={<Navigate to='home' />} />
					<Route path='home' element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
