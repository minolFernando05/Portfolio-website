# Portfolio website 

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview
This React project is a template for creating project pages with a consistent structure. It includes support for multiple sections, each with text and optional images. The template also supports smooth transitions between pages and ensures that the page always starts at the top when navigated to.

## Features
- Consistent layout for project pages
- Support for multiple sections with text and images
- Smooth page transitions
- Automatic scroll to top on navigation
- Responsive design
- Customizable styles with CSS

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/minolFernando05/Portfolio-website.git
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173` to view the app.

## Project Structure

```
react-projects-page-template/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├─── CaseStudyPages/
│   │   │    ├── Datapel.jsx
│   │   │    ├── ShitPapers.jsx
│   │   │    ├── Plab.jsx
│   │   │    └── PracticeWork.jsx
│   │   ├─── AboutMeImages/
│   │   ├─── cardImages/
│   │   ├─── datapelImages/
│   │   ├─── plabImages/
│   │   ├─── practiceWorkImages/
│   │   ├─── shitPapersImages/
│   │   ├─── socialMediaImages/
│   │   └─── ...
│   ├── components/
│   │   ├── ScrollToTop.jsx
│   │   ├── ProjectsPageTemplate.jsx
│   │   ├── NavBar.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionComponent.jsx
│   │   ├── projectNav.jsx
│   │   └── chatlink.jsx
│   ├── pages/
│   │   ├── AboutMe.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Home.jsx
│   │   ├── not-found.jsx
│   │   ├── Home.jsx
│   │   └── ProjectsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...

```


## Dependencies
- React
- React Router DOM
- Other dependencies as listed in `package.json`

## Authors

- **Minol Ferando** - *Initial work* 

## License
This project can be used by anyone !!!
