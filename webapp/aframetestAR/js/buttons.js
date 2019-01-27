//initial settings for the car models
var model = 0;
var color = 0;

//array of available models and their colors
var cars = [["#audi", "#audi_blue"], ["#beetle", "#beetle_yellow", "#beetle_pink"]];

function nextModel() {
	var entityEl = document.querySelector('a-gltf-model');
	console.log(cars.length)
    model = model + 1; // increase i by one
    model = model % cars.length; // if we've gone too high, start from `0` again
    entityEl.setAttribute('src', cars[model][color]);
}

function prevModel() {
	var entityEl = document.querySelector('a-gltf-model');
    if (model === 0) { // i would become 0
        model = cars.length; // so put it at the other end of the array
    }
    model = model - 1; // decrease by one
    entityEl.setAttribute('src', cars[model][color]);
}

function nextColor() {
	var entityEl = document.querySelector('a-gltf-model');
	console.log(cars[model].length)
    color = color + 1; 
    color = color % cars[model].length; 
    entityEl.setAttribute('src', cars[model][color]);
}

function prevColor() {
	var entityEl = document.querySelector('a-gltf-model');
    if (color === 0) { 
        color = cars[model].length; 
    }
    color = color - 1;
    entityEl.setAttribute('src', cars[model][color]);
}