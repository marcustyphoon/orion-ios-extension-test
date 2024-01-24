'use strict';

(async () => {
  const browser = globalThis.browser || globalThis.chrome;

  const url = browser.runtime.getURL('/some_content.json');

  alert(`url to fetch is: ${url}`);

  try {
    const result = await fetch(url);
    alert(`success! ${result}`);
  } catch (e) {
    alert(`error! ${e}`);
  }
})();
