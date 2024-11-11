import './style.css';
import { renderHeader } from './components/header/Header.ts';
import { renderHero } from './components/hero/Hero.ts';
import { renderGallery } from './components/gallery/Gallery.ts';
import { renderFooter } from './components/footer/Footer.ts';

export let currentLocale: 'en' | 'ar' = 'en';

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
});

function renderPage(): void {
  const app = document.querySelector('#app') as HTMLElement;
  app.innerHTML = '';
  app.append(renderHeader());
  app.append(renderHero());
  app.append(renderGallery());
  app.append(renderFooter());
  changeLocale();
  switchTextDirection();
}

function changeLocale(): void {
  const languageItems = document.querySelectorAll('.language__item');
  console.log(languageItems);

  languageItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const target = event.currentTarget as HTMLElement;
      currentLocale = target.dataset.lang as 'en' | 'ar';
      renderPage();
    });
  });
}

function switchTextDirection(): void {
  const app = document.querySelector('#app') as HTMLElement;
  app.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
}
