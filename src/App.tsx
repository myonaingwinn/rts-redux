import { Provider } from "react-redux";
import "./App.css";
import RepositoryList from "./components/RepositoryList";
import { store } from "./state";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h2>Search for a Package</h2>
				<RepositoryList />
			</div>
		</Provider>
	);
}

export default App;
