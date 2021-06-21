import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import React from 'react';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <div className={styles.sidebarInner}>
                <Logo className={styles.logo} />
                <Search />
                <Menu />
            </div>
        </aside>
    );
};