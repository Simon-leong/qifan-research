function filterPublications(event, type) {
  const normalizedType = type === 'list' ? 'list' : 'core';
  const buttons = document.querySelectorAll('.pub-button');
  const coreView = document.querySelector('[data-publication-view="core"]');
  const listView = document.querySelector('[data-publication-view="list"]');

  buttons.forEach((button) => button.classList.remove('active'));

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else if (buttons.length) {
    const activeIndex = normalizedType === 'list' ? 1 : 0;
    if (buttons[activeIndex]) buttons[activeIndex].classList.add('active');
  }

  if (coreView) {
    coreView.hidden = normalizedType === 'list';
  }

  if (listView) {
    listView.hidden = normalizedType !== 'list';
  }
}

function showPublications(type) {
  filterPublications(null, type);
}

document.addEventListener('DOMContentLoaded', () => {
  filterPublications(null, 'core');
});

// Papers under review: show a notice instead of opening a link.
document.addEventListener('click', (event) => {
  const link = event.target.closest('.pub-review-link');
  if (!link) return;
  event.preventDefault();

  let toast = document.querySelector('.pub-review-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'pub-review-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = 'This paper is currently under review and will be released after acceptance.';
    document.body.appendChild(toast);
  }

  toast.classList.add('is-visible');
  window.clearTimeout(toast.hideTimer);
  toast.hideTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
});
