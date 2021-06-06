import AppTodos from './todos.vue';

const todosRoutes = [
    {
        path: '/todos',
        component: AppTodos,
        // children: [
        //     {
        //         path: '',
        //         redirect: {
        //             name: 'todos-list'
        //         }
        //     }
        // ]
    }
]

export default todosRoutes;