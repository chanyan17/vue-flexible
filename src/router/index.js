import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import AddItem from '@/components/AddItem'
import ImgTest from '@/components/ImgTest/ImgTest'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'TodoList',
            component: TodoList
        },
        {
            path: '/add_item',
            name: 'AddItem',
            component: AddItem
        },
        {
            path: '/img_test',
            name: 'ImgTest',
            component: ImgTest
        }
    ]
})
