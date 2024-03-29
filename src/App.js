import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layouts';
import { CartContextProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <CartContextProvider>
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Layout = route.layout || DefaultLayout;
                                const Page = route.component;
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            </CartContextProvider>
        </AuthProvider>
    );
}

export default App;
