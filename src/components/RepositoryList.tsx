import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoryList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepositories } = useActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		searchRepositories(term);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default RepositoryList;
