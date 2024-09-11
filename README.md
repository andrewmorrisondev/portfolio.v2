
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
make dev
```

This command installs dependencies and starts the development environment using Remix, including Tailwind CSS in development mode.

## Deployment

## Deployment

This project is hosted on Vercel, and deployment is integrated with GitHub Actions. For production deployment:

1. Make a pull request (PR) to the `main` branch on GitHub.
   
   - The PR will trigger GitHub Actions to run automated checks, including linting, testing, and building the project.
   - Ensure that the pull request passes all checks in GitHub Actions before merging.

2. Once the pull request is approved and merged into the protected `main` branch, Vercel will automatically redeploy the latest changes.

   - Vercel is configured to monitor the `main` branch, and any successful build will trigger an automatic redeployment.


## Build Commands

Here are the key commands to manage this project:

- **Develop** (install dependencies and start the dev server):
  ```bash
  make dev
  ```

- **Build the project** (install dependencies, run linting, and build):
  ```bash
  make build
  ```

- **Clean build artifacts**:
  ```bash
  make clean
  ```

## Styling

This project comes with [Tailwind CSS](https://tailwindcss.com/) pre-configured for quick and easy styling. You can customize the Tailwind setup or switch to another CSS framework if you prefer. See the [Vite docs on CSS](https://vitejs.dev/guide/features.html#css) for more information on customizing your CSS.

To build Tailwind for production, run:

```bash
make build
```

## Side Hustles

This portfolio is more than just a showcase of my development work. Here’s what else you’ll find:

- **Music Career**: A section dedicated to my work as a musician.
- **Chess Matches**: View and replay my chess matches.
- **Interactive Code Examples**: A space to explore interactive code I've written.
- **Media Gallery**: A showcase of photos and videos I've taken.

## License

This project is open-source and available under the MIT License. Feel free to use or contribute!
