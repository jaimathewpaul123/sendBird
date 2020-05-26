import { isSafari } from "./util";

export function _createElement({ tagName, id, innerText, attrs, className }) {
  if (!tagName) throw "NoTagName";

  const elem = document.createElement(tagName);

  if (id) elem.id = id;
  if (innerText) elem.innerText = innerText;

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      elem.setAttribute(key, value);
    });
  }

  if (className) {
    elem.className = className;
  }

  return elem;
}

export function createDiv({ id, className, innerText } = {}) {
  return _createElement({ tagName: 'div', id: id, className: className, innerText: innerText });
}

export function createHr({ id, className } = {}) {
  return _createElement({ tagName: 'hr', id: id, className: className });
}

export function createLabel({ id, htmlFor, className, innerText } = {}) {
  const attrs = {};

  if (htmlFor) {
    attrs.for = htmlFor;
  }

  return _createElement({ tagName: 'label', id: id, className: className, innerText: innerText, attrs });
}

export function createAudio({ id, className, autoplay, muted, remote } = {}) {
  const attrs = {};

  const element = _createElement({ tagName: 'audio', id: id, className: className, attrs: attrs });

  element.autoplay = autoplay;
  element.muted = muted;

  if (remote && isSafari()) {
    element.controls = true;
  }

  return element;
}

export function createVideo({ id, className, autoplay, muted, remote } = {}) {
  const attrs = {};
  const element = _createElement({ tagName: 'video', id: id, className: className, attrs: attrs });

  element.autoplay = autoplay;
  element.muted = muted;

  if (remote && isSafari()) {
    element.controls = true;
  }

  return element;
}

export function createInput({ id, className, placeholder } = {}) {
  const attrs = {};

  if (placeholder) {
    attrs.placeholder = placeholder;
  }

  return _createElement({ tagName: 'input', id: id, className: className, attrs });
}

export function createSelect({ id, className } = {}) {
  return _createElement({ tagName: 'select', id: id, className: className });
}

export function createOption({ id, className, value, innerText } = {}) {
  const attrs = {};

  if (value) {
    attrs.value = value;
  }

  return _createElement({
    tagName: 'option',
    id: id,
    className: className,
    innerText: innerText,
    attrs: attrs
  });
}

export function createCheckbox({ id, className } = {}) {
  return _createElement({
    tagName: 'input',
    id: id,
    className: className,
    attrs: { 'type': 'checkbox' }
  });
}

export function createButton({ id, className, innerText } = {}) {
  return _createElement({ tagName: 'button', id: id, className: className, innerText: innerText });
}

export function createImg({ id, className, src, onerror } = {}) {
  const element = _createElement({
    tagName: 'img',
    id: id,
    className: className,
    attrs: { src: src }
  });

  element.onerror = onerror;

  return element;
}

export function replaceClassName(element, searchValue, newValue) {
  element.classList.replace(searchValue, newValue);
}