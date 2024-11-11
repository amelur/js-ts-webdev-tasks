import './gallery.css';
import dataGallery from '../../data/gallery.json';
import { GalleryProps } from '../types/interfaces';
import { currentLocale } from '../../main';

export function createGalleryTitle(title: string): HTMLElement {
  const galleryTitle = document.createElement('h2');
  galleryTitle.className = 'gallery__title';
  galleryTitle.textContent = title;
  return galleryTitle;
}

function createGalleryList(props: GalleryProps): HTMLElement {
  const galleryList = document.createElement('ul');
  galleryList.className = 'gallery__list';

  props?.items.forEach((item) => {
    const galleryItem = document.createElement('li');
    galleryItem.className = 'gallery__item';
    const image = document.createElement('img');
    image.className = 'gallery__image';
    const path = new URL(`${item.src}`, import.meta.url).href;
    image.src = path;
    image.alt = item.alt;
    galleryItem.append(image);
    galleryList.append(galleryItem);
  });

  return galleryList;
}

export function renderGallery(): HTMLElement {
  const gallery = document.createElement('section');
  gallery.className = 'gallery';

  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__img';
  const path = new URL('../../assets/images/gallery.png', import.meta.url).href;

  galleryImage.src = path;
  galleryImage.alt = 'bats';

  gallery.append(galleryImage);
  gallery.append(createGalleryTitle(dataGallery.title[currentLocale]));
  gallery.append(createGalleryList(dataGallery));
  return gallery;
}
