import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Searched from '~/pages/Searched';
import DetailProduct from '~/pages/DetailProduct';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products/:type', component: Products },
    { path: '/searched/:search', component: Searched },
    { path: '/detailproduct/:name', component: DetailProduct },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
