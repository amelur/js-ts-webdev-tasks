export class Image {
  #node: HTMLImageElement;

  constructor(image: { name: string; alt: string }) {
    this.#node = document.createElement('img');
    this.#node.classList.add('image');
    this.renderImage(image);
  }

  get node(): HTMLElement {
    return this.#node;
  }

  renderImage(image: { name: string; alt: string }): void {
    this.#node.src = `./src/assets/images/${image.name}`;
    this.#node.alt = image.alt;
  }
}
