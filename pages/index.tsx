import { useEffect, useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, TextArea } from "../components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount');
    }
  });

  useEffect(() => {
    console.log('Mounted')
  }, []);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Htag tag='h2'>Текст</Htag>
      <Htag tag='h3'>Текст</Htag>
      <Button appearance='primary' arrow='right' className="info" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='l'>Text</P>
      <P>Text</P>
      <P size='s'>Text</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="Тест"/>
      <TextArea placeholder="Тест"/>
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
