export class Tags {
  #node: HTMLUListElement;

  constructor(tags: { slug: string; title: string }[]) {
    this.#node = document.createElement('ul');
    this.#node.classList.add('card__tags');
    this.renderTags(tags);
  }

  get node(): HTMLElement {
    return this.#node;
  }

  renderTags(tags: { slug: string; title: string }[]): void {
    tags.forEach((tag, index) => {
      const tagElement = document.createElement('li');
      tagElement.classList.add('card__tag');
      tagElement.textContent = tag.title;
      if (index < tags.length - 1) {
        tagElement.textContent += ', ';
      }
      this.#node.append(tagElement);
    });
  }
}
