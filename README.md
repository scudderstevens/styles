# Styles 
Awesome scss styles for my projects. These **styles** define the visual display, responsive rules and user interactions for universal design components and specific web properties, a Design System.

## BEM Philosophy
A design philosophy that focuses on establishing a logical structure (Design System) and application (Design Framework):

* **B**lock    - parent block container (the lease specific, _universal_)

* **E**lement  - child element(s) contained within the parent block container (specific to a child of `block`, a platforms' or properties' _theme_)

* **M**odifier - alter block and/or element(s) to indicate individual or group states (the most specific, a set of Element )

### Applied

**B.**EM - Universl building **b**locks
[main.min.css](https://min.gitcdn.link/repo/scudderstevens/styles/master/latest/css/main.min.css "universal building blocks")

B.**E.M.** - Platform or property specific **e**lements and **m**odifcations of `main`, creating `me` _theme_.
[me.min.css](https://min.gitcdn.link/repo/scudderstevens/styles/master/latest/css/themes/me.min.css "scudderstevens.me")

## Evolution
The design components and user interactions defined within this project are intended to evolve over time, so `latest` is the next proposed version of `v#`. `v#` is complete collection of css and javascript, collectivly all version are described as 'styles'.

### File Structure
This README file documents the overall structure and common features shared by all style versions. Each version has its own README file documenting the specifics of that particular style's version.

~~~
styles/
|
|– latest/
|   |
|   |– css/      # CSS & SCSS
|   |– js/       # JavaScript
|   `– README.md # Readme file for latest
|
|– v#/
|   |
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
The directory containing the most current version of a style undergoing development and testing. Using this style in a solution is risky, it is better to use a particular version to better manage updates.

#### `v#/`
The directory containing the version # of a style, the highest number being the most recient public version.

When `latest` has been fully tested and is ready to be published, the directory is duplicated and renamed to `/v#+1`. This replaces `/v#` as the current fully tested version of a style. Any website using an older version `/v#-n` of the style rules will not be broken. That website can be updated to use `/v#+1` or even `latest` following a testing and redeployment process.

This structure builds on the best practices as defined by [Sass Guidelines](https://sass-guidelin.es/#architecture)

### Getting Started
You will need a scss compiler to compile your changes. I am using Microsoft's [Visual Studio Code](https://code.visualstudio.com/) with the [Easy Sass Extention](https://marketplace.visualstudio.com/items?itemName=spook.easysass) by *Wojciech Sura*.

To help here is a collection of [resources](./RESOURCES.md)

## License
This project is licensed under the MIT License - see the [MIT License](./LICENSE) file for details.