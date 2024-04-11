import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/not-found/not-found';
import MainPage from './pages/main/main';
import AboutPage from './pages/about/about';
import CatalogPage from './pages/catalog/catalog';
import { AppRoute } from './const';
import ContactsPage from './pages/contacts/contacts';
import ProductPage from './pages/product/product';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route
                    path={AppRoute.root}
                    element={<MainPage />}
                />
                <Route
                    path={AppRoute.about}
                    element={<AboutPage />}
                />
                <Route
                    path={AppRoute.catalog}
                    element={<CatalogPage />}
                />
                <Route
                    path={`${AppRoute.product}/:id`}
                    element={<ProductPage />}
                />
                <Route
                    path={AppRoute.contacts}
                    element={<ContactsPage />}
                />
                <Route
                    path='*'
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;