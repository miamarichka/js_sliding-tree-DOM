'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

function onClick(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  };

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  };

  childrenContainer.hidden = !childrenContainer.hidden;
}

tree.addEventListener('click', onClick);
