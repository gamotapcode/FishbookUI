import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { SearchIcon } from '../Icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div>
            <div className={cx('search')}>
                <input
                    placeholder="Tìm kiếm trên Facebook"
                    spellCheck={false}
                />
                {/* <button className={cx('clear')}>clear</button>
                <button className={cx('loading')}>loading</button> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
}

export default Search;
