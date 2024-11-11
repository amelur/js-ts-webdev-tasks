import './footer.css';
import footerBgImage from '../../assets/images/footer.png';
import dataFooter from '../../data/footer.json';
import { FooterProps } from '../types/interfaces';
import { currentLocale } from '../../main';

export function createFooter(props: FooterProps): HTMLElement {
  const template = document.getElementById(
    'footer-template'
  ) as HTMLTemplateElement;

  const clone = template.content.cloneNode(true) as HTMLElement;

  const title = clone.querySelector('.footer__title') as HTMLElement;
  title.textContent = props.title[currentLocale];

  const media = clone.querySelector('.media__list') as HTMLElement;
  props.media.forEach((item) => {
    const mediaItem = document.createElement('li');
    mediaItem.className = 'media__list-item';
    const image = document.createElement('img');
    image.className = 'media__list__icon';
    const path = new URL(`${item.src}`, import.meta.url).href;
    image.src = path;
    image.alt = item.alt;
    mediaItem.append(image);
    media.append(mediaItem);
  });

  return clone;
}

export function renderFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  const path = new URL(footerBgImage, import.meta.url).href;
  footer.style.backgroundImage = `url(${path})`;
  footer.append(createFooter(dataFooter));
  return footer;
}
