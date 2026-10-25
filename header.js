document.querySelectorAll('.site-nav').forEach((header) => {
  const toggle = header.querySelector('.nav-toggle');
  const links = header.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    links.classList.toggle('open', !isOpen);
    toggle.textContent = isOpen ? '\u2630' : '\u2715';
  });
});
