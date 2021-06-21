import { SearchProps } from './Search.props';
import styles from './Search.module.scss';
import cn from 'classnames';
import React, { useState } from 'react';
import { Button, Input } from '..';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [ search, setSearch ] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    // const handleKeyDown = (e: KeyboardEvent) => {
    //     if (e.key == 'Enter') goToSearch();
    // };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onInput={(e) => setSearch(e.currentTarget.value)}
                // onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
            ><SearchIcon /></Button>
        </div>
    );
};