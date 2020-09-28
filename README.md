# README

[On Rhythm draft](http://cwitulski.com/rhythm/)

## To do

### Writing

* Finish examples

### Code

* Add goatcounter and split out CSS (since this has multiple pages now)
* Determine overall look
* Set up color variables for easy changes later
* Try using objects to organize the code
  * Frame (title)
  * Box layout
  * Wave form layout
  * Play and loop buttons
  * Text description
  * Audio object?

## Development commands

```
pandoc source/index.md -o dist/index.html -s -c styles.css
pandoc source/part1.md -o dist/part1.html -s -c styles.css
pandoc source/part2.md -o dist/part2.html -s -c styles.css
pandoc source/part3.md -o dist/part3.html -s -c styles.css
pandoc source/part4.md -o dist/part4.html -s -c styles.css
pandoc source/references.md -o dist/references.html -s -c styles.css
```

### Sass

```
sass --watch sass/style.scss:dist/styles.css
```

### Webpack

```
npx webpack
```
