const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			People: [],
			Planet: [],
			Starship: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacter: () => {
				async function getData() {
					try {
						const response = await fetch("https://www.swapi.tech/api/people");
						const data = await response.json()
						const store = getStore()
						setStore({
							People: data.results
						})
					} catch (error) {
						console.error(error);
					}
				}

				getData();

			},
			//},
			getPlanet: () => {
				async function getData() {
					try {
						const response = await fetch("https://www.swapi.tech/api/planets");
						const data = await response.json()
						const store = getStore()
						setStore({
							Planet: data.results
						})
					} catch (error) {
						console.error(error);
					}
				}

				getData();
			},
			getStarship: () => {
				async function getData() {
					try {
						const response = await fetch("https://www.swapi.tech/api/starships");
						const data = await response.json()
						const store = getStore()
						setStore({
							Starship: data.results
						})
					} catch (error) {
						console.error(error);
					}
				}

				getData();
			},
		}
	};
};

export default getState;
