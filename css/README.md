# Day 22 Landing Page: Interactive Navigation Menu

A responsive landing page with an interactive hamburger navigation menu built using HTML, CSS and JavaScript.

## Features

- Responsive layout that adapts to desktop, tablet and mobile screens
- Hamburger icon that appears on screens 768px wide or smaller
- Click handler that toggles an `active` class to show or hide the menu
- Smooth slide-down animation using CSS transitions
- Hamburger icon animates into an X when the menu is open
- Menu closes automatically when a link is clicked
- Smooth scrolling to page sections
- Accessible toggle button using `aria-label` and `aria-expanded`

## Technologies Used

- HTML5
- CSS3 (Flexbox, media queries, transitions)
- JavaScript (DOM manipulation, event listeners)

## Project Structure

```
day22-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## How It Works

1. **HTML:** a `<button>` with three `<span>` bars acts as the hamburger icon, placed next to the `<nav>` element.
2. **CSS:** the hamburger is hidden on desktop and shown inside a `@media (max-width: 768px)` query. On mobile, the menu is collapsed with `max-height: 0`.
3. **JavaScript:** clicking the hamburger toggles the `active` class on the nav and the `open` class on the button.
4. **Transition:** CSS animates `max-height` and `opacity` so the menu slides smoothly.

## How to Run

1. Clone or download this repository:
   ```bash
   git clone https://github.com/pratiksha0604/day22-landing-page.git
   ```
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or right-click it and choose **Open with Live Server**.
4. To test the mobile menu, press `F12`, then `Ctrl + Shift + M`, and set the width to 768px or below.

## Testing

| Viewport | Expected behaviour |
|---|---|
| Desktop (above 768px) | Hamburger hidden, links shown in a row |
| Tablet and mobile (768px and below) | Hamburger visible, links hidden until clicked |
| Hamburger clicked | Menu slides down, icon becomes an X |
| Hamburger clicked again | Menu slides up, icon returns to three bars |
| Link clicked | Page scrolls to the section and the menu closes |

## Author

**Pratiksha Bhende**
GitHub: [@pratiksha0604](https://github.com/pratiksha0604)