# Symfony + React + Tailwind CSS Stack

This project is a stack for building applications with Symfony, React, and Tailwind CSS. It includes a ready-to-use setup for Webpack Encore, Babel, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) and npm or Yarn.
- You have installed [Composer](https://getcomposer.org/).
- You have installed [Symfony CLI](https://symfony.com/download).

## Installation

Follow these steps to get started with the project:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ArnoldMsl/Stack-Symfony-7-React-Tailwind.git
    ```

    then got to the directory :

   ```bash
   cd Stack-Symfony-7-React-Tailwind
   ```

3. **Install PHP dependencies:**

    ```bash
    composer install
    ```

4. **Install JavaScript dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Using Yarn:
    ```bash
    yarn install
    ```

5. **Set up environment variables:**

    Copy the `.env` file to `.env.local` and adjust the settings according to your environment:

    ```bash
    cp .env .env.local
    ```
6. **Build Tailwind CSS:**

    ```bash
    npx tailwindcss -i ./assets/styles/input.css -o ./assets/styles/output.css --watch
    ```

7. **Build assets:**

    For development:

    Using npm:
    ```bash
    npm run dev
    ```

    Using Yarn:
    ```bash
    yarn dev
    ```

    For production:

    Using npm:
    ```bash
    npm run build
    ```

    Using Yarn:
    ```bash
    yarn build
    ```

8. **Run the Symfony server:**

    ```bash
    symfony server:start
    ```

    Your application should now be running at `http://localhost:8000`.

## Allowing automatic refreshing of the browser

This stack does not provide any solutions to automatically refresh the browser once a change has been made. To enable it, we recommend using browser sync webpack plugin :

```bash
npm install --save-dev browser-sync-webpack-plugin
```

or

```bash
yarn add --dev browser-sync-webpack-plugin
```

then go to your webpack.config.js and add these lines : 

```bash
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
```

```bash
Encore
//
.addPlugin(new BrowserSyncPlugin({
        proxy: 'http://localhost:8000', // Symfony local server URL
        files: [
            'assets/**/*.js',
            'assets/**/*.jsx',
            'assets/**/*.css',
            'templates/**/*.html.twig'
        ],
        reloadDelay: 0
    }))
```
Your browser should now refresh everytime you modify an asset or a Twig template

## Usage

This stack comes with a basic setup for Symfony, React, and Tailwind CSS. Here's a quick overview of the project structure:

- **Symfony Backend:**
  - Located in the `src` directory.

- **React Frontend:**
  - JavaScript files are located in the `assets/js` directory.
  - Entry point: `assets/app.js`.
  - React components should be placed in `assets/react/controllers`.

- **Tailwind CSS:**
  - Configured in `tailwind.config.js`.
  - CSS file: `assets/styles/input.css`.


### Tailwind CSS Customization

To customize Tailwind CSS, edit the `tailwind.config.js` file and the `assets/styles/input.css` file.

### Known issues :

If you are using VScode you might get an error in assets/styles/input.css that states "Unknown at rule @tailwind". To fix this :

Create a folder with the name ".vscode" at the root of your projet. Inside it, create a "settings.json" file with this code :

```bash
{
    "files.associations": {
        "*.css": "tailwindcss"
    }
}
```

then restart VSCode

### Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request.

### License

This project is open-source and available under the [MIT License](LICENSE).


