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

# Run linting and automatically fix issues
lint:
	@$(NPM) run lint -- --fix

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

# Ensure lint passes before pushing
prepush: lint
	@echo "Linting passed, ready to push."

# Deploy to Vercel
deploy:
	@vercel --prod

# Default task: install, lint, test, build
default: install lint test build tailwind-build
