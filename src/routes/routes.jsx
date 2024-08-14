import config from '~/configs';
import Following from '~/pages/Following';
import Home from '~/pages/Home';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
