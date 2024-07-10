type CarouselItemProps = {
  image: string;
  title: string;
};

type CarouselProps = {
  slides: CarouselItemProps[];
};

export type { CarouselProps, CarouselItemProps };
