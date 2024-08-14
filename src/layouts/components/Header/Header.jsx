import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import config from '~/configs';
import images from '~/assets/images';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-left')}>
                    <Link
                        to={config.routes.home}
                        className={cx('logo-link')}
                    >
                        <img src={images.logo} alt="FishBook" />
                    </Link>
                    <Search />
                </div>
                ahihi
            </div>
        </header>
    );
}

export default Header;
