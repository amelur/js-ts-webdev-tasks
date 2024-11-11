import './hero.css';
import dataHero from '../../data/hero.json';
import { currentLocale } from '../../main';

import { HeroProps } from '../types/interfaces';

function Hero(props: HeroProps = dataHero): string {
  const localeContent = props[currentLocale];

  const template = ` 
      <div class="hero__date">
        <img src="${localeContent.dateIcon.src}" alt="${localeContent.dateIcon.alt}" class="hero__date-icon"></img>
        <span class="hero__date-text">${localeContent.date}</span>
      </div>
      <h1 class="hero__title">${localeContent.title}</h1>
    </div>
    <img src="${localeContent.arrowDownIcon.src}" alt="${localeContent.arrowDownIcon.alt} "class="hero__icon-down"></img>
  `;

  return template;
}

export function renderHero(): HTMLElement {
  const hero = document.createElement('section');
  hero.classList.add('hero');
  hero.innerHTML = Hero(dataHero);
  return hero;
}
