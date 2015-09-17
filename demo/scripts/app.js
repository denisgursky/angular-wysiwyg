var app = angular.module('app', ['colorpicker.module', 'wysiwyg.module', 'ui.bootstrap']);

app.controller('MyCtrl', function($scope) {

    $scope.data = {
        text: 'Angular WYSIWYG </br> '
    };

    $scope.callbacks = {

        image: function(cb){

            // do async stuff here ?
            cb('https://camo.githubusercontent.com/61ec76bf8c35afff849832294a27d1ef6228e04c/68747470733a2f2f7261772e6769746875622e636f6d2f54657272794d6f6f726549492f616e67756c61722d777973697779672f6d61737465722f73637265656e73686f74732f73637265656e73686f742e706e67');

        },
        link: function(cb){

            cb('http://www.bluu.co.nz');

        }

    };

    $scope.disabled = false;

    /*$scope.menu = [
        ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
        ['format-block'],
        ['font'],
        ['font-size'],
        ['font-color', 'hilite-color'],
        ['remove-format'],
        ['ordered-list', 'unordered-list', 'outdent', 'indent'],
        ['left-justify', 'center-justify', 'right-justify'],
        ['code', 'quote', 'paragraph'],
        ['link', 'image'],
        ['css-class']
    ];*/

    //$scope.cssClasses = ['test1', 'test2'];

    $scope.setDisabled = function() {
        $scope.disabled = !$scope.disabled;
    }

})
