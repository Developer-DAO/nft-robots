# NFT-Robots

The official D_D animated robot NFT generator!

This repository houses custom robot artwork and a user interface that combines SVG image variants with weighted trait randomization to generate D_D robots. All combinations are calculated at runtime and are 100% unique.

## Getting Started

To view and create robots, first install all project dependencies with `npm install` or `yarn`.

To start the project locally, you can run the start script:

`yarn start` or `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view and customize all artwork in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## SVG Assets and Animation

This React app imports all SVG images from `/artwork/svg/stuffed`. All CSS animations are located in `/artwork/css/styles.css`.

## Roadmap

We've made good progress so far but there is much more to tackle. If you want to help out, you can open a pull request to help us address things like:

- Robot coloring variants
- Background variants
- Accessory variants
- React Remotion for capturing video
- UI enhancements
- Local file system support (perhaps Electron) for generating / saving metadata, image, and video files
- Unit tests and Cypress integration tests
