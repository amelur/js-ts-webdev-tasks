import { Image } from './Image';
import { Tags } from './Tags';

export interface CardProps {
  heading: string;
  description: string;
  image: { name: string; alt: string };
  tags: { slug: string; title: string }[];
}

export class Card {
  #node: HTMLElement;
  #contentCard: HTMLElement | null;

  constructor(props: CardProps) {
    this.#node = document.createElement('div');
    this.#node.classList.add('card');
    this.#contentCard = null;
    this.#renderCard(props);
  }

  get node(): HTMLElement {
    return this.#node;
  }

  #renderCard(props: CardProps): void {
    this.#renderImageCard(props);
    this.#renderContentContainer();
    this.#renderHeading(props);
    this.#renderDescription(props);
    this.#renderTags(props);
  }

  #renderContentContainer(): void {
    this.#contentCard = document.createElement('div');
    this.#contentCard.classList.add('card__content');
    this.#node.append(this.#contentCard);
  }

  #renderImageCard(props: CardProps): void {
    const image = new Image(props.image);
    this.#node.append(image.node);
  }

  #renderHeading(props: CardProps): void {
    const title = document.createElement('h5') as HTMLHeadingElement;
    title.classList.add('card__title');
    title.textContent = props.heading ?? '';
    this.#contentCard?.append(title);
  }

  #renderDescription(props: CardProps): void {
    const description = document.createElement('p') as HTMLParagraphElement;
    description.classList.add('card__description');
    description.textContent = props.description ?? '';
    this.#contentCard?.append(description);
  }

  #renderTags(props: CardProps): void {
    const tagsElement = new Tags(props.tags);
    this.#contentCard?.append(tagsElement.node);
  }
}
