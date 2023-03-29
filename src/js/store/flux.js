const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
				
			]
			People: []
			Planets: []
			Starships: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			People = () => {
				fetch('https://www.swapi.tech/api/people/', ops)
				
				.then(resp => {
					return resp.json();
				})
				.then(data => {
					setStore(data);
				})
				.catch(error => {
					console.log(error);
				});
			}

			Planets = () =>{
				fetch('https://www.swapi.tech/api/planets/', ops) 
					method: "GET"
					headers: {
						'Content-Type': 'application/json'
					  }
					  {body: JSON.stringify()}
					}
				}
				.then(resp => {
					return resp.json();
				})
				.then(data => {
					setStore(data.results);
				})
				.catch(error => {
					console.log(error);
				});
			}
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
