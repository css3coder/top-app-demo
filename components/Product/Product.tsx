import { ProductProps } from './Product.props';
import styles from './Product.module.scss';
import cn from 'classnames';
import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Button, Card, Rating, Review, ReviewForm, Tag } from '..';
import { decOfNum, priceRu } from '../../helpers/helpers';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag size='s' color='green' className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}<span>/мес</span></div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag color="outline" key={c}>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewCount} {decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <div className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.features}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <h6 className={styles.characteristicsName}>{c.name}</h6>
                            <span className={styles.characteristicsDots} />
                            <p className={styles.characteristicsValue}>{c.value}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <h6>Преимущества</h6>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <h6>Недостатки</h6>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <div className={cn(styles.hr,styles.hr2)} />
                <div className={styles.actions}>
                    <Button appearance='primary' className={styles.moreBtn}>Узнать подробнее</Button>
                    <Button
                        appearance='outline'
                        arrow={isReviewOpened ? 'down' : 'right'}
                        className={styles.revBtn}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                        >Читать отзывы</Button>
                </div>
            </Card>
            <motion.div
                className={styles.revWrap}
                animate={isReviewOpened ? 'visible' : 'hidden'}
                variants={variants}
                initial='hidden'
            >
                <Card color="blue" className={styles.reviews} ref={reviewRef}>
                    {product.reviews.map(r => (
                        <Review key={r._id} review={r} />
                    ))}
                    <ReviewForm productId={product._id} />
                </Card>
            </motion.div>
        </div>
    );
}));
