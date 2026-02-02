#  Gemini Multi-Service Orchestrator

![CI Status](https://github.com/LIGunna93/gemi-genz/actions/workflows/ci.yml/badge.svg)
![Node Version](https://img.shields.io/badge/node-20.x-green)
![License](https://img.shields.io/badge/license-MIT-blue)

A professional Full-Stack orchestration layer for the **Gemini API** ecosystem.
This project demonstrates how to coordinate multiple AI models (Flash, Pro, and Nano Banana) to handle basic, as well as complex, multimodal workflows with automated CI/CD safety nets.

## Architecture Overview

This project utilizes a **Service-Oriented Architecture** to decouple AI logic from the delivery layer:

* ***Gemini 3 Flash:*** Handles high-speed text processing and initial routing.
* ***Gemini 3 Pro:*** Reserved for deep reasoning and complex codebase analysis.
* ***Nano Banana (Imagen):*** Dedicated high-fidelity image generation service.
* ***Validation Layer:*** Custom Node.js middleware to sanitize inputs and validate environment health.

## Tech Stack

- ***Front-End:*** HTML5/CSS w/ Vanilla-esque JS
- ***Backend:*** Node.js (v20+) w/ Express
- ***AI SDK:*** `@google/genai` (2026 Unified Version)
- ***CI/CD:*** GitHub Actions (Environment secret validation & Unit testing)
- ***Security:*** Dotenv-enc & Branch Protection Rules

## 🚀 Getting Started

### 1. Prerequisites
- A basic understanding of software packaging, environment configuration, and server deployment [ -- or straight up vibez ]
- A Google AI Studio API Key ([Get it here](https://ai.google.dev/))
- Node.js installed locally [ +20v ]
- Prompt ready!

### 2. Installation
You can simply open up your choice terminal and navigate to the parent directory to which you intend to clone/import the project folder.

```bash
C://cd abc/xyz/parent_folder
```
Start by cloning the project to your remote directory using -

```bash
git clone https://github.com/LIGunna93/gemi-genz.git your-repo-name
```
***Inclusion of 'your-repo-name' optional; if not defined(empty), it defaults the project_folder/app name to the clone's repo name - gemi-genz***
### { your-repo-name?

```bash
cd your-repo-name  :  cd gemi-genz
```
Once in the root directory, re-initialize the packaging dependencies for the local environment. Hit
```bash
npm install
```

### 3. Configure the necessary environment variables -

Using an IDE or any other capable editor, navigate to and open the .env file that is located in the root directory (it's a hidden file incase you John Cena it). Enter the respective required or optional parameters. For starters, all you really need is that Google AI API Key and the rest can carry you through the initial runs.
```
# Enter your personal API Key from Google AI Studio

GEMINI_API_KEY=xxxxxxzzzzzzzyyyyyyy
```

### 4. Choose your destiny!

**Clients -**

***Navigate your active terminal directory to the root of the gemi-genz (or YOUR_REPO_NAME) clone project folder.***
**Type:** 
```bash
npm start
```
***Follow the server start instructions to find the address to route to access the app***

**Devs -**

**Navigate to the respective source engine files and node it all out in the TUI 🤖**
***Otherwise, if you must --***
```Shell
npm run dev
```
