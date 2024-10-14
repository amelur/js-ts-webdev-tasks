const headingColor = '';
const textColor = 'var(--Colors-White)';

const dataCard = [
  {
    title: { name: 'Startup Framework', _fontColor: 'var(--Colors-Heading)' },
    description: {
      text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
      _fontColor: 'var(--Colors-Heading)',
    },
    _backgroundColor: 'var(--Colors-Grey)',
  },
  {
    title: { name: 'Web Generator', _fontColor: 'var(--Colors-Heading)' },
    description: {
      text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
      _fontColor: 'var(--Colors-Text)',
    },
    _backgroundColor: 'var(--Colors-White)',
    _btn_active: true,
    _boarder: '2px solid var(--Colors-Grey)',
  },
  {
    title: { name: 'Slides 4', _fontColor: 'white' },
    description: {
      text: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
      _fontColor: 'white',
    },
    _backgroundColor: 'var(--Action-Secondary)',
  },
  {
    title: { name: 'Postcards', _fontColor: 'white' },
    description: {
      text: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
      _fontColor: 'white',
    },
    _backgroundImg: './assets/Image.png',
  },
];

const showcase = createElement('div', 'showcase');

function createElement(tag, className, textContent = '') {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function createCard(data) {
  const card = createElement('div', 'card');
  const cardTitle = createElement('h3', 'card__title', data.title.name);
  cardTitle.style.color = data.title._fontColor;
  const cardDescription = createElement(
    'p',
    'card__desc',
    data.description.text
  );
  cardDescription.style.color = data.description._fontColor;
  if (data._backgroundColor) {
    card.style.backgroundColor = data._backgroundColor;
  }
  if (data._backgroundImg) {
    card.style.backgroundImage = `url(${data._backgroundImg})`;
  }
  const cardBtn = createElement('button', 'card__btn', 'Explore');
  if (data._btn_active) {
    cardBtn.classList.add('active');
  }
  if (data._boarder) {
    card.style.border = data._boarder;
  }
  card.append(cardTitle);
  card.append(cardDescription);
  card.append(cardBtn);
  return card;
}

function renderCards() {
  const cardsWrapper = createElement('div', 'cards__wrapper');
  dataCard.forEach((data) => {
    cardsWrapper.append(createCard(data));
  });
  showcase.append(cardsWrapper);
}

function renderPage() {
  const wrapper = createElement('div', 'wrapper');
  const showcaseTitle = createElement('h2', 'showcase__title', 'Last works');
  const showcaseBtn = createElement(
    'button',
    'showcase__btn',
    'Explore Showcase'
  );
  wrapper.append(showcaseTitle);
  wrapper.append(showcaseBtn);
  showcase.append(wrapper);
  document.body.append(showcase);
  renderCards();
}
renderPage();
