# Training Project

This is an Angular application built with modern practices, including **Feature-Sliced Design (FSD)** architecture and **server-side rendering (SSR)**.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd training
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## 🛠️ Development

### Start the Development Server

To start the local development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code Formatting

This project uses **[Biome](https://biomejs.dev/)** for fast code formatting and linting.

To format your code, run:

```bash
npm run format
```

This ensures a consistent code style across the project.

### Building for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📂 Project Structure

This project follows a modular architecture inspired by **Feature-Sliced Design**.

-   `src/app/entities`: Business entities (e.g., Post, User).
-   `src/app/features`: Feature logic (e.g., PostList).
-   `src/app/pages`: Application pages (e.g., HomePage).
-   `src/app/shared`: Shared utilities, UI components, and services.

## 🧪 Testing

To run unit tests:

```bash
npm test
```
