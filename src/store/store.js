import Vue from "vue";
import Vuex from "vuex";
import img1 from "../assets/cake.jpeg";
import img2 from "../assets/noodle.jpeg";
import img3 from "../assets/fries.jpeg";
import img4 from "../assets/macroni.jpeg";
import img5 from "../assets/pizza.jpeg";
import img6 from "../assets/salad.jpeg";
import img7 from "../assets/sweet.jpeg";
import img8 from "../assets/samosa.jpeg";
import img9 from "../assets/soup.jpeg";
import img10 from "../assets/tacos.jpeg";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    topRated: [
      {
        id: 1,
        name: "Cake",
        price: 100,
        url: img1,
        desc: "Very  testy cake",
        rate: 4.5,
      },
      {
        id: 2,
        name: "Noodles",
        price: 200,
        url: img2,
        desc: "Very  testy noodles",
        rate: 3.5,
      },
      {
        id: 3,
        name: "Fries",
        price: 300,
        url: img3,
        desc: "Crispy",
        rate: 4.1,
      },
    ],
    allCategaries: [
      {
        id: 4,
        name: "Macroni",
        price: 100,
        url: img4,
        desc: "Crispy",
        rate: 2.5,
      },
      { id: 5, name: "Pizza", price: 230, url: img5, desc: "Yammi", rate: 3.4 },
      {
        id: 6,
        name: "Salad",
        price: 110,
        url: img6,
        desc: "Crispy",
        rate: 4.2,
      },
      {
        id: 7,
        name: "Sweet",
        price: 50,
        url: img7,
        desc: "very Testy",
        rate: 4.4,
      },
    ],
    dishesNearYou: [
      {
        id: 8,
        name: "Smosa",
        price: 250,
        url: img8,
        desc: "Awesome",
        rate: 4.1,
      },
      {
        id: 9,
        name: "Soup",
        price: 50,
        url: img9,
        desc: "very Testy",
        rate: 4.2,
      },
      {
        id: 10,
        name: "Tacos",
        price: 450,
        url: img10,
        desc: "sop Sweat",
        rate: 4.3,
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  },
  mutations: {
    addToCart(state, payload) {
      /* Algorithm:-
            we will add the qty by 1
            if cart item length arguments > 0
                check if payload already exist in cart item
                    yes -> find the index of payload in CI and update its qty by 1
                    no -> push the item
            else push the item
                */
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++;
    },
    removeItem(state, payload) {
      /*
            Algotrith for remove Item
            check if cart item length > 0
            yes -> check if payload already exist in cart item
                yes -> find the index of payload in CI and delete its qty by 1
            update the list
*/
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === payload.id);
        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id === payload.id);
          if (state.cartItems[index]["quantity"] !== 0) {
            state.cartItems[index]["quantity"] -= 1;
            state.cartItemCount--;
          }if (state.cartItems[index]["quantity"] === 0){
              state.cartItems.splice(index, 1)
          }
        }
      }
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
  },
});
