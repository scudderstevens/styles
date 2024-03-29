
## General Resources
These Styles are build using [SASS](https://sass-lang.com/) and follow the best practices of [SASS architecture](https://sass-guidelin.es/#architecture). All Documentation is created using [MarkDown](https://daringfireball.net/projects/markdown/). [Git Guide to MarkDown](https://guides.github.com/features/mastering-markdown/) is a great place to start learning MarkDown.

* [normalize.css v8.0.1](https://github.com/necolas/normalize.css) – css/vendors
* [variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide "mozilla documentation")
* [web.dev | intro to variable fonts, guide](https://web.dev/variable-fonts/ "google developers guide")

## Heuristics
A _heuristic evaluation_ is a usability inspection method for computer software that helps to identify usability problems in the user interface (UI) design. [wiki](https://en.wikipedia.org/wiki/Heuristic_evaluation)

* Nielsen's Heuristics [wiki]https://en.m.wikipedia.org/wiki/Heuristic_evaluation#Nielsen.27s_heuristics) | [post](https://blog.prototypr.io/10-usability-heuristics-with-examples-4a81ada920c)
* Gerhardt-Powals' cognitive engineering principles [wiki](https://en.wikipedia.org/wiki/Heuristic_evaluation#Gerhardt-Powals.27_cognitive_engineering_principles) |
* Shneiderman's Eight Golden Rules of Interface Design [wiki](https://en.wikipedia.org/wiki/Heuristic_evaluation#Shneiderman.27s_Eight_Golden_Rules_of_Interface_Design) |
* Weinschenk and Barker classification [wiki](https://en.wikipedia.org/wiki/Heuristic_evaluation#Weinschenk_and_Barker_classification) |
* Google Design System & Heuristics [docs](https://material.io/design)
* Apple Design System & Heuristics [docs](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)

### Frameworks

#### bit

An end-to-end solution for component-driven web development [www](https://bit.dev/)


* [html.systems | reference : design component examples](http://html.systems/ "design component examples and code")
* [get.foundation | getting started : documentation](https://get.foundation/sites/docs/index.html)
* [getbootstrap.com | getting started : documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

### Icons
* [feathericons.com | official website](https://feathericons.com/)

### Images
* [icolorpalette.com | generate from image](https://icolorpalette.com/color-palette-from-images)

### Buttons
* [medium.com | post : button best practices](https://medium.com/nextux/design-better-buttons-6b64eb7f13bc)

### Model-Based User Interfaces
* [w3.org : resource ](https://www.w3.org/TR/mbui-intro/)

### BEM
* [getbem.com : resource](http://getbem.com/)
* [en.bem.info : resource](https://en.bem.info/)
* [gapintelligence.com | BEM for css an introduction : article](https://www.gapintelligence.com/blog/bem-for-css-an-introduction/)
* [itnext.io | ui philosophy : article](https://itnext.io/thinking-of-bem-as-a-ui-philosophy-instead-of-a-css-naming-convention-9727e2cf9328)

### SASS
* [get.foundation | sass functions : documentation](https://get.foundation/sites/docs/sass-functions.html)

### MarkDown
* [markdownguide.org | MarkDown : documentation](https://www.markdownguide.org/)

Here are a few quick MD notes, mostly used by me as a reminder but can get you started.

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~

### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Some footnote text.

Tables can look like this:

Name           Size  Material      Color
------------- -----  ------------  ------------
All Business      9  leather       brown
Roundabout       10  hemp canvas   natural
Cinderella       11  glass         transparent

Table: Shoes sizes, materials, and colors.

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
Keyword   Text
--------  -----------------------
red       Sunsets, apples, and
          other red or reddish
          things.

green     Leaves, grass, frogs
          and other things it's
          not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.

oranges
  : Citrus!

tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term and  its definition to spread things out more.)

Here's a "line block" (note how whitespace is honored):

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](example-image.jpg "An exemplary image")

Inline math equation: $\omega = d\phi / dt$. Display
math should get its own line like so:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
