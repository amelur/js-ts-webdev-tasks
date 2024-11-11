interface Img {
  src: string;
  alt: string;
}

export interface HeaderProps {
  en: HeaderContent;
  ar: HeaderContent;
}

interface HeaderContent {
  title: string;
  nav: Nav;
  button: string;
}

export interface Nav {
  items: string[];
}

export interface HeroProps {
  en: HeroContent;
  ar: HeroContent;
}

export interface HeroContent {
  dateIcon: Img;
  date: string;
  title: string;
  arrowDownIcon: Img;
}

export interface GalleryProps {
  title: { en: string; ar: string };
  items: Img[];
}

export interface FooterProps {
  title: { en: string; ar: string };
  media: Img[];
}
