import Vue from 'vue'
import VueRouter from 'vue-router';
// import App from "./App";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', name: 'home', component: CharacterList
        },
        {
            path: '/:id', name: 'characterID', component: CharacterDetail, props: { default: true, sidebar: false}
        }
    ]
})