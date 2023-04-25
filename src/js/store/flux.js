const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			People: [],
			Planets: [],
			Starships: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacter: () => {
				for (let i = 1; i <= 10; i++) { fetch("https://www.swapi.tech/api/people") }
				async function getData() {
					try {
						const response = await fetch("https://www.swapi.tech/api/people");
						const data = await response.json()
							.then((data) =>
								setStore({
									people: [
										...store.people,
										{ ...data.result.properties, id: i },
									],
								})
							);
					} catch (error) {
						console.error(error);
					}
				}

				getData();
			},
			//},
			getPlanet: () => {
				for (let i = 1; i <= 10; i++) { fetch("https://www.swapi.tech/api/planets") }
				async function getData() {
					try {
						const response = await fetch("https://www.swapi.tech/api/planets");
						const data = await response.json()
							.then((data) =>
								setStore({
									planets: [
										...store.planets,
										{ ...data.result.properties, id: i },
									]
								})
							);
					} catch (error) {
						console.error(error);
					}
				}

				getData();
			},
			getStarships: () => {
				for (let i = 1; i <= 10; i++) { fetch("https://www.swapi.tech/api/starships") }
				async function getData() {
					try {
						const response = await fetch("https://www.swapi.tech/api/starships");
						const data = await response.json()
							.then((data) =>
								setStore({
									planets: [
										...store.planets,
										{ ...data.result.properties, id: i },
									]
								})
							);
					} catch (error) {
						console.error(error);
					}
				}

				getData();
			},


			Planets: () => {
				//fetch('https://www.swapi.tech/api/planets/', ops) 
				method: "GET"
				headers: {
					'Content-Type'; 'application/json'
				}
				{ body: JSON.stringify() }
			}

			//.then(resp => {
			//	return resp.json();
			//})
			//.then(data => {
			//	setStore(data.results);
			//})
			//.catch(error => {
			//	console.log(error);
			//});
			,
			Starships: () => {
				fetch('https://www.swapi.tech/api/starships/', {
					method: "GET"
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore(data.results);
					})
					.catch(error => {
						console.log(error);
					});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		}
	};
};

export default getState;
