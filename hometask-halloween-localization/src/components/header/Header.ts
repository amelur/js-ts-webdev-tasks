import './header.css';
import dataHeader from '../../data/header.json';
import { HeaderProps } from '../types/interfaces';
import { currentLocale } from '../../main';

export function Header(props: HeaderProps = dataHeader): string {
  const localeContent = props[currentLocale];
  const navItems = localeContent.nav.items
    .map(
      (item) =>
        `<li class="nav__item"><a href="#" class="nav__link">${item}</a></li>`
    )
    .join('');

  const template = `
    <h1 class="header__title">${localeContent.title}</h1>
    <nav class="nav">
      <ul class="nav__list">
        ${navItems}
      </ul>
    </nav>
    <ul class="language__list">
      <li class="language__item" data-lang="en">EN</li>
      <li class="language__item" data-lang="ar">عرب</li>
    </ul>
    <button class="btn btn_header">${localeContent.button}</button>
    `;

  return template;
}

export function renderHeader(): HTMLElement {
  const header = document.createElement('header') as HTMLElement;
  header.classList.add('header');
  header.innerHTML = Header(dataHeader);
  return header;
}
