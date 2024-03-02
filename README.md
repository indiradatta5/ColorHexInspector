# ColorHexInspector

ColorHexInspector is a simple Chrome extension that allows you to inspect and display hex codes for text and background colors on web pages. This extension is useful for web developers and designers who want to quickly identify the color codes used in a website's elements.

## Features

- Inspect text color and background color on mouse hover.
- Display hex codes for both text and background colors.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder where you cloned or downloaded this extension.

## Files

- **manifest.json**: Configuration file for the extension, defining its properties, permissions, and other details.

- **popup.html**: HTML file for the extension's popup, containing the structure and layout of the overlay.

- **popup.css**: CSS file for styling the extension's popup and overlay.

- **popup.js**: JavaScript file responsible for handling mouse events, calculating hex codes, and managing the display of the overlay.

- **content.js**: JavaScript file injected into web pages to interact with the elements and gather color information.
- Favicon images used as the extension's icon in the Chrome toolbar.
           
## Usage

1. Once the extension is installed, you'll see its icon in the Chrome toolbar.
2. Visit any website.
3. Click on the extension icon to enable it.
4. Hover over elements on the webpage to see the hex codes for text and background colors displayed in a popup.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Indira Datta

Hope this helps! :) 

Feel free to customize the content based on the specific details of your extension.
