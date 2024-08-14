import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefautLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout
                        ? route.layout
                        : route.layout === null
                        ? Fragment
                        : DefautLayout;
                    const Page = route.component;
                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                            key={index}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
