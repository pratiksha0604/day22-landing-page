// Select the hamburger button and the nav menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Toggle the 'active' class to show/hide the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
  // toggle() adds the class if missing, removes it if present
  // and returns true when the class was added
  const isOpen = nav.classList.toggle('active');

  // Turn the hamburger into an X (styled in Step 3)
  hamburger.classList.toggle('open');

  // Update the accessibility attribute
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close the menu automatically when a nav link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});