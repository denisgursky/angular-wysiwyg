
Angular WYSIWYG directive.
===========================

[Fork of] (https://github.com/TerryMooreII/angular-wysiwyg)  

![Awesome Shot] (https://raw.github.com/TerryMooreII/angular-wysiwyg/master/screenshots/screenshot.png)


Pull Requests Welcome
-------------------------


Demo
----

```
$ git clone https://github.com/wadeos/angular-wysiwyg.git
$ npm install
$ gulp server
```
Open browser to http://localhost:4000/demo


Installation
------------
`bower install angular-wysiwyg`


Changes
-----------------------
* Removed jQuery Deps, Uses internal jqLite instead
* Removed Bootstrap JS, Uses UI Bootstrap instead

Required dependancies
-----------------------
* [AngularJS] (http://www.angularjs.com)
* [Font Awesome] (http://fortawesome.github.io/Font-Awesome/)
* [Twitter Bootstrap CSS] (http://getbootstrap.com/2.3.2/)
* [UI Bootstrap] (https://angular-ui.github.io/bootstrap/)
* [bootstrap-color-picker] (https://github.com/buberdds/angular-bootstrap-colorpicker)

Install each dependancy to your AngularJS project.

Add `'wysiwyg.module'` to your main angular.module like so
```javascript
angular.module('myapp', ['myApp.controllers', 'myApp.services', 'wysiwyg.module', 'ui.bootstrap']);
````


Usage
------------
```html
<wysiwyg textarea-id="question" textarea-class="form-control"  textarea-height="80px" textarea-name="textareaQuestion" textarea-required ng-model="yourModel.model" textarea-menu="yourModel.customMenu" callbacks="yourModel.callbacks"></wysiwyg>
```
Options
-----------

Option|Description
---------------------|---------------
**ng-model**		 | 			REQUIRED - The angular data model
**callbacks**		 |   		An object containing functions that are used for callbacks. E.g creating a callback for overriding injection of image and link button
**textarea-id** 	 |			The id to assign to the editable div
**textarea-class**	 |			The class(es) to assign to the the editable div
**textarea-height**	 |			If the height is not specified in a text-area class then the hight of the editable div (default: 80px)
**textarea-name**	 |			The name attribute of the editable div
**textarea-required**|			True/False HTML/AngularJS required validation
**textarea-menu**    |          Cusomize the wysiwyg buttons and button groups ***See Below** If nothing is specified then the default buttons and groups will be shown.
**disabled**  |          Disable the buttons and wysiwig area

Callbacks
--------------

Callbacks are used to override the Image and Link buttons currently, to open custom modals to inject images / links.
The callback object can be set in your controller scope and then passed to your directive by the callbacks option

```javascript

	// in controller
	$scope.callbacks = {

		image: function(cb){

			// do stuff here.. do async task with promise ?

			promise.then(function(){

				cb('http://image-url');

			});

		},
		link: function(){

			// do stuff here.. do async task with promise ?

			promise.then(function(){

				cb('http://link-url');

			});

		}

	};

```


Buttons
--------------

If you don't need all of the buttons and functions of the default WYSIWYG editor you can customize it.

To do so you need to create a scope variable in your controller.  This variable be an array that contains arrays of button groups.

```javascript

	//This also happens to be the default menu options.
	$scope.yourModel.customMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
            ['format-block'],
            ['font'],
            ['font-size'],
            ['font-color', 'hilite-color'],
            ['remove-format'],
            ['ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify'],
            ['code', 'quote', 'paragraph'],
            ['link', 'image']
        ];
```

So above each array will end up being a group of the specified buttons.

**Note:**  The `font` and `font-size` dropdowns must be in thier own group.  

List of possible buttons |
------------|
bold |
italic |
underline |
strikethrough |
subscript |
superscript |
font |
font-size |
font-color |
hilite-color |
remove-format |
ordered-list |
unordered-list |
outdent |
indent |
left-justify |
right-justify |
center-justify |
code |
paragraph |
quote |
link |
image |
