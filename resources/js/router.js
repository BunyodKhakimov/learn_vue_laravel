import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes:[
        {
            path: '/people', component: () => import('./components/Person/IndexComponent'),
            name: 'people.index',
        },
        {
            path: '/people/create', component: () => import('./components/Person/CreateComponent'),
            name: 'people.create',
        },
        {
            path: '/people/:id/edit', component: () => import('./components/Person/EditComponent'),
            name: 'people.edit',
        },
        {
            path: '/people/:id', component: () => import('./components/Person/ShowComponent'),
            name: 'people.show',
        },
    ],
})
