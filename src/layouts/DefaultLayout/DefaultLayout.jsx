import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Activitybar from '../components/Activitybar';

const cx = classNames.bind(styles);
function DefautLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <Activitybar />
            </div>
        </div>
    );
}
DefautLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefautLayout;
