import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag="h1">Title</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button appearance="outline" arrow="down">Белая кнопка</Button>
            <P size="l">текст текст</P>
            <Tag color="outline">outline</Tag>
            <Tag color="red">red</Tag>
            <Tag color="green">green</Tag>
            <Tag color="gray">gray</Tag>
            <Tag color="primary">primary</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
            <Input placeholder="введите" />
            <Textarea placeholder="введите" />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}