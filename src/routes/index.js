import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Searched from '~/pages/Searched';
import DetailProduct from '~/pages/DetailProduct';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products/:type', component: Products },
    { path: '/searched/:search', component: Searched },
    { path: '/detailproduct/:name', component: DetailProduct },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
