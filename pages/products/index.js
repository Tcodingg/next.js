import { useEffect } from 'react';
import axios from 'axios';

export const getStaticProps = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const allData = await data.json();

	return {
		props: { allData },
	};
};

function Index({ allData }) {
	console.log(allData);

	return (
		<div>
			<h1>this is products page</h1>
		</div>
	);
}

export default Index;
