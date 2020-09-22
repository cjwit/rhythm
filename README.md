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

## Pandoc command

```
pandoc source/index.md -o index.html -s -c pandoc.css
pandoc source/part1.md -o part1.html -s -c pandoc.css
pandoc source/part2.md -o part2.html -s -c pandoc.css
pandoc source/part3.md -o part3.html -s -c pandoc.css
pandoc source/part4.md -o part4.html -s -c pandoc.css
pandoc source/references.md -o references.html -s -c pandoc.css
```

## Sass

```
sass --watch sass/style.scss:pandoc.css
```