import * as nodePath from "path"

const rootFolder = nodePath.basename(nodePath.resolve());
const distFolder = "./dist";
const srcFolder = "./src";

export const path = {
    dist: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        images: `${distFolder}/img/`,
        fonts: `${distFolder}/fonts/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    },
    clean: distFolder,
    rootFolder: rootFolder,
    distFolder: distFolder,
    srcFolder: srcFolder,
};  