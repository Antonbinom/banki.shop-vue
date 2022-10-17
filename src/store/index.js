import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
})

const store = createStore({
	state: {
		searchValue: '',
		cards: [
			{
				id: 0,
				name: '«Рождение Венеры» Сандро Боттичелли',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In a quasi, ratione sunt alias repellat assumenda! Eius, nemo neque! Harum voluptatum aliquid dolorum rem laudantium eligendi voluptas ad nisi, explicabo, modi obcaecati inventore quasi et, consectetur aut. At perspiciatis facilis quia illo, dicta eveniet obcaecati dolorum qui incidunt sequi tempora!',
				oldPrice: '2 000 000 $',
				price: '1 000 000 $',
				image: 'first.jpeg',
				images: ['vin1.jpeg', 'vin2.jpeg', 'vin3.jpeg', 'vin4.jpeg', 'vin5.jpeg'],
				sale: true,
				cart: 'Купить'
			},
			{
				id: 1,
				name: '«Тайная вечеря»  Леонардо да Винчи',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In a quasi, ratione sunt alias repellat assumenda! Eius, nemo neque! Harum voluptatum aliquid dolorum rem laudantium eligendi voluptas ad nisi, explicabo, modi obcaecati inventore quasi et, consectetur aut. At perspiciatis facilis quia illo, dicta eveniet obcaecati dolorum qui incidunt sequi tempora!',
				price: '3 000 000 $',
				image: 'second.jpeg',
				images: ['leo1.jpeg', 'leo2.jpeg', 'leo3.jpeg', 'leo4.jpeg', 'leo5.jpeg'],
				sale: true,
				cart: 'Купить'
			},
			{
				id: 2,
				name: '«Сотворение Адама» Микеланджело',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In a quasi, ratione sunt alias repellat assumenda! Eius, nemo neque! Harum voluptatum aliquid dolorum rem laudantium eligendi voluptas ad nisi, explicabo, modi obcaecati inventore quasi et, consectetur aut. At perspiciatis facilis quia illo, dicta eveniet obcaecati dolorum qui incidunt sequi tempora!',
				oldPrice: '6 000 000 $',
				price: '5 000 000 $',
				image: 'third.jpeg',
				images: ['mik1.jpeg', 'mik2.jpeg'],
				sale: true,
				cart: 'Купить'
			},
			{
				id: 3,
				name: '«Урок анатомии»  Рембрандт',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In a quasi, ratione sunt alias repellat assumenda! Eius, nemo neque! Harum voluptatum aliquid dolorum rem laudantium eligendi voluptas ad nisi, explicabo, modi obcaecati inventore quasi et, consectetur aut. At perspiciatis facilis quia illo, dicta eveniet obcaecati dolorum qui incidunt sequi tempora!',
				oldPrice: '2 000 000 $',
				price: '1 000 000 $',
				image: 'fourth.jpeg',
				sale: false,
				cart: 'Купить'
			}
		]
	},
	mutations: {
		setCartStatus(state, [id, status]) {
			state.cards[id].cart = status
		},
		setSearchValue(state, value) {
			state.searchValue = value
		},
	},
	actions: {
		setCartStatus({commit}, payload) {
			console.log(payload);
			commit('setCartStatus', payload)
		},
		setSearchValue({commit}, value) {
			commit('setSearchValue', value)
		},
	},
	getters: {
		getCards(state) {
			return state.cards.filter(item => item.name.toLocaleLowerCase().includes(state.searchValue.toLowerCase()))
		},
		getSearchValue(state) {
			return state.searchValue
		}
	},
	plugins: [vuexLocal.plugin]
})

export default store