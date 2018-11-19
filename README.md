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
| These 4 pages do allow for a nice separation of these things and an obvious place for them to reside | Having them all in a single spot allows them all to be referred back to easier but where to place them becomes a bit more complicated |
| Changing/Sending information seems much more complicated and convoluted | Changing/Sending information seems much more simple and intuitive |

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

on 2nd Friday Refactor adding:
* Tapped: Boolean
* Low On Pints: Boolean

##### Component Structure:
![The Hoptimists component structure](/HoptimistsComponents.png)

##### Component Tree:
![The Hoptimists component tree](/HoptimistsComponentTree.png)
###### Changes made to above Tree upon refactor:
* I originally expected Add Keg & Edit Keg to come directly off of Admin component. Then Keg List would be a shared child of Admin and Visitor and it have a single child of Keg.
* However, getting to know state a bit better I believe the best choice is to make Keg List stateful since it includes all the kegs details. Having Add Keg and Edit Keg now siblings with Keg (displays info).
* All Changes will now happen on Add Keg & Edit Keg, travel up to update the stateful Keg List and then back down to display in Keg.

## User Needs

* A Visitor wants to be able to see what beers are on tap and all their information.
* A Visitor wants to be able to see what the alcohol content range displayed so it's easy to read.
* Admin wants to be able to fill out a form to add a new keg.
* Admin wants to be able to edit an added keg via another form.
* Admin and visitor wants to be able to see an approximation of how many pints are left in a keg.
* Admin wants to be able to see any keg that has less than 10 pints easily.
* Admin wants to be able to click a button to indicate a sold pint. That button then removes a pint from that kegs pint count.

## Unforeseen Issues and Questions
1. A ghost keg has appeared. While having a masterkeg array consisting of 6 kegs, a 7th blank keg appears at the bottom of the keg list component. Can't locate the cause. Update: fixed.
2. Began trying to get the ABV to change color according to percentage. Not sure of where to add the function yet.
3. I'm not 100% sure that my choice of state placement/heirarchy of the bottom of the tree layout. I can't foresee any real issues arrising but I am unsure if it is best practices.
4. Having issues locating where to place a function to conditionally alter css values.
5. Beginning a rework in order to build and establish functionality on App and then move them to the other appropriate components.
6. Keys becoming an issues. Decide to add in UUID.


## Setup/Installation Requirements
Using Command Line:
1. ``git clone https://github.com/coffeeringsdesign/the-hoptimists.git `` to clone the site.
2. ``cd ~`` to navigate to base directory
3. ``cd Desktop `` to navigate to your desktop
4. ``cd the-hoptimists`` to enter the site folder
8. ``npm install`` to install all webpack dependencies
9. ``npm run start`` this will webpack and immediate pop open the site on your browser. I recommend Chrome.
10. I recommend Atom to edit any html, javascript, or sass.

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
* JSX
* npm

## Suuport & Contact Details

Please feel free to get in touch. Reach out to me at kendra@coffeeringsdesign.com.

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kendra Kelly**
