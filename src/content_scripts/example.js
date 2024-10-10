'use strict';

(async () => {
  const browser = globalThis.browser || globalThis.chrome;

  const jsonUrl = browser.runtime.getURL('/some_content.json');
  alert(`JSON url to fetch is: ${jsonUrl}`);

  try {
    const result = await fetch(jsonUrl);
    alert(`JSON fetch success! ${result}`);
    const text = await result.text();
    alert(`JSON fetch text using Body.text(): ${text}`);
    const json = JSON.parse(text);
    alert(`parsed: ${JSON.stringify(json, null, 2)}`);
  } catch (e) {
    alert(`error! ${e}`);
  }

  try {
    const result = await fetch(jsonUrl);
    const json = await result.json();
    alert(`JSON fetch object using Body.json()): ${JSON.stringify(json, null, 2)}`);
  } catch (e) {
    alert(`error! ${e}`);
  }

  // const jsUrl = browser.runtime.getURL('/some_content.js');
  // alert(`js url to fetch is: ${jsUrl}`);

  // try {
  //   const result = await fetch(jsUrl);
  //   alert(`js fetch success! ${result}`);
  //   const text = await result.text();
  //   alert(`js fetch text using Body.text(): ${text}`);
  // } catch (e) {
  //   alert(`error! ${e}`);
  // }

  // const txtUrl = browser.runtime.getURL('/some_content.txt');
  // alert(`text url to fetch is: ${txtUrl}`);

  // try {
  //   const result = await fetch(txtUrl);
  //   alert(`text fetch success! ${result}`);
  //   const text = await result.text();
  //   alert(`text fetch text using Body.text(): ${text}`);
  // } catch (e) {
  //   alert(`error! ${e}`);
  // }
})();
