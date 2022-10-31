import { Provider } from "react-redux";
import "./App.css";
import RepositoryList from "./components/RepositoryList";
import { store } from "./state";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Search for a Package</h1>
				<RepositoryList />
			</div>
		</Provider>
	);
}

export default App;
