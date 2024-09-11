
# Welcome to Andrew Morrison's Portfolio

This is my personal portfolio website, built using Remix, TypeScript, Vercel, and Tailwind CSS. The website showcases my work as a software engineer, freelance web developer, musician, and features interactive code examples, chess matches, and a media gallery.

## Table of Contents
- [Development](#development)
- [Deployment](#deployment)
- [Build Commands](#build-commands)
- [Styling](#styling)
- [Side Hustles](#side-hustles)
- [License](#license)

## Development

To start the development server:

```bash
npm run dev
```

This command will spin up the local development environment using Remix, including Tailwind CSS in development mode.

## Deployment

This project is hosted on Vercel. For production deployment:

1. Build your app for production:
   ```bash
   npm run build
   ```

2. Then deploy to Vercel:
   ```bash
   vercel --prod
   ```

The Remix app is production-ready and can be deployed using the Vercel CLI. Make sure to deploy the output of the build.

## Build Commands

Here are some important commands to manage this project:

- **Install dependencies**:
  ```bash
  npm install
  ```

- **Build the project**:
  ```bash
  npm run build
  ```

- **Start the project in production**:
  ```bash
  npm start
  ```

- **Lint the code**:
  ```bash
  npm run lint
  ```

- **Run tests**:
  ```bash
  npm run test
  ```

- **Clean build artifacts**:
  ```bash
  make clean
  ```

- **Full rebuild** (clean, install, build):
  ```bash
  make rebuild
  ```

- **Deploy to Vercel**:
  ```bash
  make deploy
  ```

## Styling

This project comes with [Tailwind CSS](https://tailwindcss.com/) pre-configured for quick and easy styling. You can customize the Tailwind setup or switch to another CSS framework if you prefer. See the [Vite docs on CSS](https://vitejs.dev/guide/features.html#css) for more information on customizing your CSS.

To build Tailwind for production, run:

```bash
make tailwind-build
```

## Side Hustles

This portfolio is more than just a showcase of my development work. Here’s what else you’ll find:

- **Music Career**: A section dedicated to my work as a musician.
- **Chess Matches**: View and replay my chess matches.
- **Interactive Code Examples**: A space to explore interactive code I've written.
- **Media Gallery**: A showcase of photos and videos I've taken.

## License

This project is open-source and available under the MIT License. Feel free to use or contribute!

