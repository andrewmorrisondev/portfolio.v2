# Define variables for paths and commands
SHELL := /bin/bash
NPM := npm
REMIX := npx remix
TAILWIND := npx tailwindcss

# Dev: Install dependencies, run the dev server and Tailwind in development mode
dev:
	@$(NPM) install
	@$(NPM) run dev

# Build: Clean build artifacts, install dependencies, run linting, build Remix, and Tailwind for production
build: clean
	@$(NPM) install
	@$(NPM) run lint -- --fix
	@$(REMIX) build
	@$(TAILWIND) -i ./app/tailwind.css -o ./public/build/tailwind.css --minify

# Clean build artifacts
clean:
	@rm -rf .vercel/output
	@rm -rf build
	@rm -rf public/build
	@echo "Cleaned up build artifacts."

# Deploy: Run linting, build everything, and deploy to Vercel
deploy:
	@$(NPM) run lint -- --fix
	@$(REMIX) build
	@$(TAILWIND) -i ./app/styles/input.css -o ./public/build/tailwind.css --minify
	@vercel --prod
