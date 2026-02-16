# Welcome to my Portfolio!

[![https://codejovz.vercel.app](/public/portfolioShowcase.png)](https://codejovz.vercel.app)

Click on the photo to visit the live site.

## ⚡ Tech Stack

This project leverages the latest standards in web development:

*   **React 19**: Built on the cutting-edge version of React.
*   **TypeScript**: Ensuring type safety and a robust development experience.
*   **CSS Modules**: For scoped, maintainable, and collision-free styling.
*   **Modern CSS**: Utilizing CSS variables and native features for a responsive and themable design.
*   **Vite**: A fast build tool for modern web development.
*   **[react-svg-inliner](https://github.com/codejovz/react-svg-inliner)**: A React component for inlining SVG images.


## 🚀 Getting Started

Follow these steps to run the documentation locally on your machine.

### 1. Clone the Repository

If you haven't already, clone the `codejovz.github.io` repository:

```bash
git clone https://github.com/codejovz/codejovz.github.io.git
```

### 2. Navigate to the Project Directory

Switch to the `codejovz.github.io` folder where this web application resides:

```bash
cd codejovz.github.io
```

### 3. Install Dependencies

Install the necessary dependencies using `npm`:

```bash
npm install
```

### 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## 📂 Project Structure

This project follows a **Feature-Based Architecture**. This keeps related code collocated, making it easier to maintain and scale.

```
├── public/              # Static Assets (Google, company logos)
├── src/
│   ├── features/
│   │   ├── resumee/     # Subcomponents and utils for resumee
│   │   └── showcase/    # Subcomponents and utils for showcase
│   ├── App.tsx          # Main application component
│   ├── App.css/         # Main application styles
│   ├── Menu.tsx/        # Menu component
│   └── ...            
├── index.html           # Loads script for Google's font.
└── ...
```

*   **`src/`**: Contains the main application logic. Each folder represents a component (e.g., `/resumee`, `/showcase`), encompassing its own page, layout, and specific styles with `*.module.css`.

<details>
  <summary>I used React + TypeScript + Vite</summary>
  
With a template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
</details>