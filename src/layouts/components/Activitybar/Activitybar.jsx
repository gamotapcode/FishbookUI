import classNames from 'classnames/bind';

import styles from './Activitybar.module.scss';

const cx = classNames.bind(styles);

function Activitybar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title-header')}>Activity</div>
                <span>icon</span>
            </div>
            <div className={cx('content')}>
                <div className={cx('story')}>
                    <div className={cx('title')}>Stories</div>
                    <div className={cx('list-story')}>
                        list item story
                    </div>
                </div>
                <div className={cx('achievement')}>
                    <div className={cx('title')}>Achievement</div>
                    <div className={cx('list-achievement')}>
                        list item Achievement
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activitybar;
