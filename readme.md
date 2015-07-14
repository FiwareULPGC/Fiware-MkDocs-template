#Fiware MkDocs template
This is the custom [MkDocs](http://www.mkdocs.org/) theme used by Fiware.

## Description

This template allows to divide the documentacion in differents 'subsites', where each of them is a MkDocs project, and keeping them linked by a top menu. Note that the template only renders an unique project. For automatic creation of multiple sites, use <https://github.com/FiwareULPGC/Fiware-MkDocs-site-builder>.

An example project can be obtained in <https://github.com/FiwareULPGC/Fiware-multisite-example>.

##Features
* Floating code or images
* Smart floating code when lists are used
* Activate/deactivate floating code
* Syntax highlighting using [highlightjs](https://highlightjs.org/)
* Top menu with links to another sites
...

## Requirements 
In order to have the top menu, subsites must be defined in the mkdocs.yml file as follow:

```.yml
subsites:
- 'Home': 'home'
- 'Admin Guide': 'admin'
- 'User Guide': 'user'
```

The first parameters is the name to display and the second is the relative url. The current site also must be in this list.

If the subsites param is not defined, the template omits the top menu. It allows to use the theme for classic documentation without differents subsites.

###