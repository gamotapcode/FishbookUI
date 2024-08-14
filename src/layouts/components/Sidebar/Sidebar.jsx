import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/configs';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    MessageIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Message"
                    to={config.routes.live}
                    icon={<MessageIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                    notification={3}
                />
            </Menu>
        </aside>
    );
}
export default Sidebar;
