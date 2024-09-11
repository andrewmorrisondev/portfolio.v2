# Define variables for paths and commands
SHELL := /bin/bash
NPM := npm
REMIX := npx remix
TAILWIND := npx tailwindcss

# Dev: Install dependencies, run the dev server and Tailwind in development mode
dev:
	@$(NPM) install
	@$(NPM) run dev

# Build: Install dependencies, run linting, build Remix, and Tailwind for production
build:
	@$(NPM) install
	@$(NPM) run lint -- --fix
	@$(REMIX) build
	@$(TAILWIND) -i ./app/styles/input.css -o ./public/build/tailwind.css --minify

# Deploy: Run linting, build everything, and deploy to Vercel
deploy:
	@$(NPM) run lint -- --fix
	@$(REMIX) build
	@$(TAILWIND) -i ./app/styles/input.css -o ./public/build/tailwind.css --minify
	@vercel --prod
