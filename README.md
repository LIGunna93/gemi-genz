#  Gemini Multi-Service Orchestrator

![CI Status](https://github.com/LIGunna93/gemi-genz/actions/workflows/ci.yml/badge.svg)
![Node Version](https://img.shields.io/badge/node-20.x-green)
![License](https://img.shields.io/badge/license-MIT-blue)

A professional Full-Stack orchestration layer for the **Gemini API** ecosystem.
This project demonstrates how to coordinate multiple AI models (Flash, Pro, and Nano Banana) to handle basic - as well as complex, multimodal workflows with automated CI/CD safety nets.

## Architecture Overview

This project utilizes a **Service-Oriented Architecture** to decouple AI logic from the delivery layer:

* ***Gemini 3 Flash:*** Handles high-speed text processing and initial routing.
* ***Gemini 3 Pro:*** Reserved for deep reasoning and complex codebase analysis.
* ***Nano Banana (Imagen):*** Dedicated high-fidelity image generation service.
* ***Validation Layer:*** Custom Node.js middleware to sanitize inputs and validate environment health.

## Tech Stack

- ***Front-End:*** React + Bootstrap
- ***Backend:*** Node.js (v20+) w/ Express
- ***AI SDK:*** `@google/genai` (2026 Unified Version)
- ***CI/CD:*** GitHub Actions (Environment secret validation & Unit testing)
- ***Security:*** Dotenv-enc & Branch Protection Rules

## 🚀 Getting Started

### 1. Prerequisites
- A basic understanding of software packaging, environment configuration and server deployment [ -- or straight up vibez ]
- A Google AI Studio API Key ([Get it here](https://ai.google.dev/))
- Node.js installed locally [ +20v ]
- Prompt ready!

### 2. Installation
Start by cloning the project to your remote directory using -
```bash
git clone https://github.com/LIGunna93/gemi-genz.git your-repo-name
```
***Inclusion of 'your-repo-name' completely optional, if not defined defaults to name the standard repo's name, gemi-genz***
{ your-repo-name ?
```bash
cd YOUR_REPO_NAME  :  cd gemi-genz
```
Once in the root directory, re-initialize the packaging dependencies for the local environment. Hit
```bash
npm install
```

### 3. Choose your destiny!

## Clients-

***Navigate your active terminal directory to the root of the gemi-genz (or YOUR_REPO_NAME) clone project folder.***
**Type:** 
```bash
npm start
```
***Follow the server start instructions to find the address to route to access the app***

## Devs-

***Navigate to the respective source engine files and node it all out in your choice TUI 🤖***
