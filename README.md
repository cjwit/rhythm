# README

To do

* Add a note to each page with a link back to contents at top
* Add goatcounter and split out CSS (since this has multiple pages now)
* Finish examples

Code

* Determine overall look
* Set up color variables for easy changes later
* Try using objects to organize the code
  * Frame (title)
  * Box layout
  * Wave form layout
  * Play and loop buttons
  * Text description
  * Audio object?

Command

```
pandoc source/index.md -o index.html -s -H source/pandoc.css
pandoc source/part1.md -o part1.html -s -H source/pandoc.css
pandoc source/part2.md -o part2.html -s -H source/pandoc.css
pandoc source/part3.md -o part3.html -s -H source/pandoc.css
pandoc source/part4.md -o part4.html -s -H source/pandoc.css
pandoc source/references.md -o references.html -s -H source/pandoc.css
```