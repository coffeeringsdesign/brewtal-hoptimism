![Kendra Kelly Logo](/kkgithub.png)
# The Hoptimists

#### By Kendra Kelly

## Description

A Tap Room site built with React. The same site functionality was built with Angular previously. It's been an interesting exercise in the difference between the two:

##### Similarities
* Each uses components to break down the site into reusable and easy to edit sections.
* Each uses the same import and export functionality.

##### Differences:
| Angular | React |
|---------------|---------------|
| Uses Components but in a much larger more modular style. | Uses smaller and more Components to breakdown the layout of the site |
| Routing & linking seems to be much more complicated | Routing and linking is easier and more intuitive |
| The base installation contains more of the modules and plugins needed for the full project | The base installation is more barebones and additional modules and plugins are made by 3rd party suppliers |
| Uses Typescript | Uses Javascript and JSX |
| A Component has 4 documents that are needed for TS, HTML, Testing, & Styling | A Components JS (or JSX), HTML, & Styling is included in a single document |

## Planning and Site layout

##### Keg Object:

* Title
* Brewery
* Style (IPA, Pilsner...)
* ABV
* IBU
* Price
* Pints Remaining
* Region (local, national, internation)

##### Component Structure:
![The Hoptimists component structure](/HoptimistsComponents.png)

## User Needs

* A Visitor wants to be able to see what beers are on tap and all their information.
* A Visitor wants to be able to see what the alcohol content range displayed so it's easy to read.
* Admin wants to be able to fill out a form to add a new keg.
* Admin wants to be able to edit an added keg via another form.
* Admin and visitor wants to be able to see an approximation of how many pints are left in a keg.
* Admin and visitor wants to be able to see an approximation of how many pints are left in a keg.
* Admin wants to be able to see any keg that has less than 10 pints easily.
* Admin wants to be able to click a button to indicate a sold pint. That button then removes a pint from that kegs pint count.

## Unforeseen Issues and Questions

## Setup/Installation Requirements
Using Command Line:
1. ``git clone https://github.com/coffeeringsdesign/the-hoptimists.git `` to clone the site.
2. ``cd ~`` to navigate to base directory
3. ``cd Desktop `` to navigate to your desktop
4. ``cd the-hoptimists`` to enter the site folder
8. ``npm install`` to install all webpack dependencies
9. ``npm run start`` this will webpack and immediate pop open the site on your brower. I recommend Chrome.
14. I recommend Atom to edit any html, javascript, or sass.

## Contribution Requirements

1. Clone the repo
2. Make a new branch
3. Commit and push your changes
4. Create a PR

## Technologies Used

* React
* JavaScript
* Babel
* Webpack
* ESLint

## Suuport & Contact Details

Please feel free to get in touch. Reach out to me at kendra@coffeeringsdesign.com.

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kendra Kelly**
