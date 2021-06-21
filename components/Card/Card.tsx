import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import cn from 'classnames';
import { forwardRef, ForwardedRef } from 'react';
import { motion } from 'framer-motion';

export const Card = motion(forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
                [styles.blue]: color == 'blue'
            })}
                ref={ref}
                {...props}
        >
            {children}
        </div>
    );
}));
