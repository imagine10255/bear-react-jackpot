

<div align="center">



[![NPM](https://img.shields.io/npm/v/bear-react-jackpot.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-jackpot)
[![npm downloads](https://img.shields.io/npm/dm/bear-react-jackpot.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-jackpot)
[![npm](https://img.shields.io/npm/dt/bear-react-jackpot.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-jackpot)
[![npm](https://img.shields.io/npm/l/bear-react-jackpot?style=for-the-badge)](https://github.com/bear-react-jackpot/bear-react-jackpot/blob/master/LICENSE)

</div>

<p align="center">
  <a href="https://carousel.bearests.com">Get started</a> | 
  <a href="https://carousel.bearests.com/api">API</a> |
  <a href="https://carousel.bearests.com/example/text-animations">Demo</a> |
  <a href="https://carousel.bearests.com/props-try">Prop Try</a>
</p>

### Features

- Use React + Flexbox directly, not javascript in secondary development into React
- Easier to use


### Install

```bash
yarn add bear-react-jackpot
```

### Usage

```tsx
import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-jackpot';
import 'bear-react-jackpot/dist/index.css';

const images = [
        {id: 1, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
        {id: 2, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
        {id: 3, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
    ];
    
const bearSlideItemData: TBearSlideItemDataList  = images.map(row => {
        return {
            key: row.id,
            children: <BearSlideItem imageUrl={row.imageUrl}/>
        };
    });


export const CustomBanner = () => {
    return <BearCarousel 
        data={bearSlideItemData}
        staticHeight="200px"
    />
}
```

There is also a codesandbox template that you can fork and play with it:

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bear-react-jackpot-9h6eu)



### if your need control by out component

```tsx
const CustomBanner = ({
    const [carousel, setCarousel] = useState<IBearCarouselObj>();
  
    const goToPage = (index: number): void => control?.goToPage(index);
    const getPageTotal = (): number => control?.info.pageTotal ?? 0;

    <BearCarousel
        setCarousel={setCarousel}
        data={bearSlideItemData}
        staticHeight="250px"/
    />
}
```

### License

MIT © [imagine10255](https://github.com/imagine10255)
