import { Card, CardProps } from './components/Card';
import data from './db/cards.json';

function renderPage(): void {
  const showcase = document.querySelector('.showcase') as HTMLElement;
  const wrapper = document.createElement('div') as HTMLElement;
  wrapper.classList.add('cards');
  showcase.append(wrapper);

  renderCards(wrapper);
}

function renderCards(wrapper: HTMLElement): void {
  data.forEach((card: CardProps) => {
    const cardComponent = new Card(card);
    wrapper.append(cardComponent.node);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
});
