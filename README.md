# Styles 
Awesome scss styles for my projects. These styles define the visual display and responsive rules for common web components.

## BEM
Design system focuses on establishing foundations for color, typography, grids, texture and follows the BEM UI Philosophy:

* **B**lock    - parent block container

* **E**lement  - child element(s) contained within the parent block container

* **M**odifier - alter block and/or element(s) to indicate individual or group states

## Evolution
The Styles defined within this project are designed to evolve over time.

### Getting Started
You will need a scss compiler to compile your changes. I am using Microsoft's [Visual Studio Code](https://code.visualstudio.com/) with the [Easy Sass Extention](https://marketplace.visualstudio.com/items?itemName=spook.easysass) by *Wojciech Sura*. 

To help here is a collection of [resources](./RESOURCES.md)

### File Structure
This README file documents the overall structure and common features shared by all style versions. Each version has its own README file documenting the specifics of that particular version and examples.

~~~
styles/
|
|– beta/
|   |
|   |- assets/   # Assests
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for beta
|
|– v#/
|   |
|   |- assets/   # Assests
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for v#
|
|- .gitignore
|- LICENSE
|– README.md
`- RESOURCES.md
~~~

#### `beta/`
The directory containing the unofficial and next version of styles.

#### `v#/`
The directory containing the version # of styles, the highest number being the most recient public version.

When the current beta is ready to be published, the directory is duplicated and renamed `/v#+1` replacing `/v#` as the most recient version. Any site using an older version of the style rules will not be broken. That site can be updated to use `/v#+1` following a testing and redeployment process.

## License
This project is licensed under the MIT License - see the [MIT License](./LICENSE) file for details.