import { createStore } from "vuex";
import user from './modules/user';
import routes from "./modules/routes";

const store = createStore({
  modules: {
    user,
    routes
  },
})

export default store;