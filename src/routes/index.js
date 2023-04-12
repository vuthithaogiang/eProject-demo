import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Searched from '~/pages/Searched';
import DetailProduct from '~/pages/DetailProduct';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import FeedbackForm from '~/pages/Feedback';
import PurchaseProtection from '~/pages/PurchaseProtection';
import OrderDetails from '~/pages/OrderDetails';
import Blog from '~/pages/Blog';
import AboutUs from '~/pages/AboutUs';
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
    {
        path: '/feedback',
        component: FeedbackForm,
    },
    {
        path: '/purchase-protection',
        component: PurchaseProtection,
    },

    {
        path: '/order-details/:id',
        component: OrderDetails,
    },
    {
        path: '/blog/item',
        component: Blog,
    },
    {
        path: '/about-us',
        component: AboutUs,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
