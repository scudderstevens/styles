# Latest
Awesome scss styles for web properties.

## File Structure
This README file documents the specifics of the `latest` version. This project follows the SASS/CSS best practices as defined by the [Sass Guidelines](https://sass-guidelin.es/#architecture).

~~~
version/
|
|– css/
|   |
|   |– */*                # SCSS Import Directories
|   |
|   |- pages/ me.css      # Compiled CSS
|   |- pages/ me.min.css  # Compiled and Minified CSS
|   |- pages/ me.scss     # SCSS file
|   |
|   |- themes/ me.css     # Compiled CSS
|   |- themes/ me.min.css # Compiled and Minified CSS
|   |- themes/ me.scss    # SCSS file
|   |
|   |– main.css     # Compiled CSS
|   |– main.min.css # Compiled and Minified CSS
|   `– main.scss    # SCSS file
|
|– js/
|   |
|   `– *.js         # JavaScript files
|
`– README.md
~~~

## Global README & License
Currently you are reading a README file for this (_latest_) version of styles, see the [global README](../README.md) file for additional details. [MIT License](../LICENSE)

## CDN Styles
This framework and all theme files can be pulled from a CDN for production level solutions using 
[raw.githack.com](https://raw.githack.com/ "serves raw files directly from GitHub, Bitbucket or GitLab with proper Content-Type headers")

~~[gitcdn.link](https://min.gitcdn.link/ "CDN for GitRepos")~~, not reliable

~~[JsDeliver](https://www.jsdelivr.com/ "A free CDN for Open Source")~~, not usable for development purposes

## How To Use
### Development
add relative links to local development styles within the HTML `<head>` tag

`<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`

- **Framework**, local _main_ [main.css](https://raw.githack.com/scudderstevens/styles/main/latest/css/main.css "universal building blocks")
`<link rel="stylesheet" type="text/css" href="./latest/css/main.css">`

- **Theme**, local _me_ [themes/me.css](https://min.gitcdn.link/repo/scudderstevens/styles/main/latest/css/themes/me.css "scudderstevens.me")
`<link rel="stylesheet" type="text/css" href="./latest/css/themes/me.css">`

- **Page**, local _resume_ [pages/me.css](https://min.gitcdn.link/repo/scudderstevens/styles/main/latest/css/pages/me.css "scudderstevens.me/resume")
`<link rel="stylesheet" type="text/css" href="./latest/css/pages/me.css">`

`<link rel="stylesheet" type="text/css" href="< relative path >/< file name >.css">`

### Production
add production ready styles to the HTML `<head>` tag

`<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`

- **Framework**, _main_ [main.min.css](https://rawcdn.githack.com/scudderstevens/styles/34485f1e104c88ed7428d65f52a980e1e301dcb7/latest/css/main.min.css "universal building blocks")

`<link rel="stylesheet" type="text/css" href="https://raw.githack.com/scudderstevens/styles/main/latest/css/main.min.css">`

- **Theme**, _me_ [themes/me.min.css](https://min.gitcdn.link/repo/scudderstevens/styles/main/latest/css/themes/me.min.css "scudderstevens.me")
& assest files [me/assets](https://filebase.com/buckets/ssme/theme/assets/ "scudderstevens.me theme asset files")

`<link rel="stylesheet" type="text/css" href="https://raw.githack.com/scudderstevens/styles/main/latest/css/themes/me.min.css">`

- **Page**, _resume_ [pages/me.min.css](https://min.gitcdn.link/repo/scudderstevens/styles/main/latest/css/pages/me.min.css "scudderstevens.me/resume")

`<link rel="stylesheet" type="text/css" href="https://raw.githack.com/scudderstevens/styles/main/latest/css/pages/me.min.css">`

add within content or template files

`<img src="https://ssme.s3.filebase.com/theme/assets/Angular-S_stroke-logo-270w.png" alt="Scudder Stevens -dot- me Angular S logo" />`

### JavaScript
Add specific javascript functions to properties, specific pages or design components.
[smooth-scroll](https://raw.githack.com/scudderstevens/styles/main/latest/js/smooth-scroll.js)

within the HTML `<body>` after the `<footer>` container.

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

`<script src="https://raw.githack.com/scudderstevens/styles/main/latest/js/smooth-scroll.js"></script>`

## Activate Styles and JavaScript
For both local development or production, within the opening `<body>` tag:

1. add id top,
`<body id="top" ...>`
This will support smooth scroll and other JavaScript functions that require a reference to the opening body tag.

2. add the Styles Framwork (main)
`<body id="top" class="main ...">`
This will apply all the default styles, such as responsive grid and other goodies.

3. add any specific Theme Styles (me)
`<body id="top" class="main me ...">`
This will allow you to more specifically define styles for containers and theme related design components.

4. add any page specific Theme Styles (resume)
`<body id="top" class="main me me__resume">`
This will allow you to define styles for containers and design components located on a specific page.