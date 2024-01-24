Instructions:

- load the contents of /src as an unpacked extension
- navigate to http://example.com

Result in desktop Orion, desktop Chrome, and desktop Firefox:

- alert appears with e.g. `url to fetch is: moz-extension://ddec28ae-0334-4fe7-bbd3-c7db128e212e/some_content.json` (although the URL is missing in Orion for whatever reason)
- alert appears with `success! [object Response]`

In iOS Orion, the second step yields `Error! TypeError: Load failed`.
