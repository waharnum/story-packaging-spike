# Story Packaging Spike

This is a quick spike using https://stuk.github.io/jszip/ and https://github.com/eligrey/FileSaver.js to demonstrate possibilities for building a ZIP file of story contents purely in-browser.

This could then be passed around in various ways to be processed by different systems that can manifest the contents.

Seeing it for yourself:

1. Clone
2. `npm install`
3. Run a browser with `http-server` or similar
4. Visit the `index.html` page
5. Enter some text and choose a file
6. Click **Package**

You will be prompted to save a zip file that will contain:
- the file you chose
- a JSON-encoded manifest file containing the text you entered and the metadata about the file you chose

The above demonstrates in a very simple way how we could package stories in a single file purely in a user's browser (caveat - tested on Firefox and Chrome on Mac so far).
