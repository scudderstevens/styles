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
This README file documents the overall structure and common features shared by all style versions. Each version has its own README file documenting the specifics of that particular version.

~~~
styles/
|
|– latest/
|   |
|   |- assets/   # Assests: Icons, Images & Fonts ...
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for beta
|
|– v#/
|   |
|   |- assets/   # Assests: Icons, Images & Fonts ...
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for v#
|
|- .gitignore
|- LICENSE
|– README.md
`- RESOURCES.md
~~~

#### `latest/`
The directory containing the most current version of styles undergoing development and testing. Using these styles in a solution is risky, it is better to use a particular version to better manage updates.

#### `v#/`
The directory containing the version # of styles, the highest number being the most recient public version.

When `latest` has been fully tested and is ready to be published, the directory is duplicated and renamed to `/v#+1`. This replaces `/v#` as the current fully tested version of styles. Any website using an older version `/v#-n` of the style rules will not be broken. That website can be updated to use `/v#+1` or even `latest` following a testing and redeployment process.

This structure builds on the best practices as defined by [Sass Guidelines](https://sass-guidelin.es/#architecture)

## License
This project is licensed under the MIT License - see the [MIT License](./LICENSE) file for details.