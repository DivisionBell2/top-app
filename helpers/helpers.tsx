import { FirstlevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { ReactSVG as CoursesIcon } from 'react-svg';
import { ReactSVG as ServicesIcon } from 'react-svg';
import { ReactSVG as BooksIcon } from 'react-svg';
import { ReactSVG as ProductsIcon } from 'react-svg';

export const firstLevelMenu: FirstlevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon src="/icons/courses.svg" className='courses_icon' />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon src="/icons/services.svg" className='services_icon' />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon src="/icons/books.svg" className='books_icon' />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon src="/icons/product.svg" className='products_icon' />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]) => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}