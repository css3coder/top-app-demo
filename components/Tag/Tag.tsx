import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({ size = 's', children , color = 'outline', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.outline]: color == 'outline',
                [styles.gray]: color == 'gray',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary'
            })}
            {...props}
        >
            { href ? <a href={href}>{children}</a> : <>{children}</> }
        </div>
    );
};