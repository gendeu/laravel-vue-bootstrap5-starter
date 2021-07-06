import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/dashboard',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/dashboard/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/dashboard/edit/:id',
        component: EditProduct
    }
];