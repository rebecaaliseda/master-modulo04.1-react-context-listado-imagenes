import type { PictureInfo } from '../model/picture-info.model';

import dog1 from '../assets/dogs/dog1.jpg';
import dog2 from '../assets/dogs/dog2.jpg';
import dog3 from '../assets/dogs/dog3.jpg';

export const dogsMockData: PictureInfo[] = [
  {
    id: 'dog-1',
    title: 'Dog running',
    picUrl: dog1,
    selected: false,
  },
  {
    id: 'dog-2',
    title: 'Dog sitting',
    picUrl: dog2,
    selected: false,
  },
  {
    id: 'dog-3',
    title: 'Dog playing',
    picUrl: dog3,
    selected: false,
  },
];
