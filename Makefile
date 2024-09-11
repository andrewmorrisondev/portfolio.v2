# Define variables for paths and commands
SHELL := /bin/bash
NPM := npm
REMIX := npx remix
TAILWIND := npx tailwindcss

# Install dependencies
install:
	@$(NPM) install

# Run tests (if you have them set up)
test:
	@$(NPM) run test

# Run linting (ESLint)
lint:
	@$(NPM) run lint

# Build the project for production
build:
	@$(REMIX) build

# Develop locally with Tailwind and Remix
dev:
	@$(NPM) run dev

# Tailwind CSS build for production
tailwind-build:
	@$(TAILWIND) -i ./app/styles/input.css -o ./public/build/tailwind.css --minify

# Clean build artifacts
clean:
	@rm -rf .vercel/output
	@rm -rf build
	@rm -rf public/build

# Full rebuild (clean, install, build)
rebuild: clean install build tailwind-build

# Deploy to Vercel
deploy:
	@vercel --prod

# Default task: install, lint, test, build
default: install lint test build tailwind-build
