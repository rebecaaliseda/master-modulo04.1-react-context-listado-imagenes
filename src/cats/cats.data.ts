import type { PictureInfo } from '../model/picture-info.model';
import cat1 from '../assets/cats/cat1.jpg';
import cat2 from '../assets/cats/cat2.jpg';
import cat3 from '../assets/cats/cat3.jpg';

export const catsMockData: PictureInfo[] = [
  {
    id: 'cat-1',
    title: 'Cat sleeping',
    picUrl: cat1,
    selected: false,
  },
  {
    id: 'cat-2',
    title: 'Cat playing',
    picUrl: cat2,
    selected: false,
  },
  {
    id: 'cat-3',
    title: 'Cat looking',
    picUrl: cat3,
    selected: false,
  },
];
