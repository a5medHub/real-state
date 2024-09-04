import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"
import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"

// this function role is to make the sum calculation of an array in the json file using .reduce method
function totalSize(params=[]){
    const totalSum = params.reduce(function(prev, cur){
        return prev + cur
    },0) // 0 is to set the first prev value , and to make it loop throw the index of the array not the objects
    return totalSum
}

// render function
function getPropertyHtml(propertyParams=placeholderPropertyObj) {
    propertyParams = propertyForSaleArr
    if(propertyParams == propertyForSaleArr){
        const property = propertyParams.map(function(e){
            return `
            <section class="card">
                <img src="/images/${e.image}">
                <div class="card-right">
                    <h2>${e.propertyLocation}</h2>
                    <h3>${e.priceGBP}</h3>
                    <p>${e.comment}</p>
                    <h3>${totalSize(e.roomsM2)}m&sup2;</h3>
                </div>
            </section> `
        }).join("")
        return property
    }else{
        return `
            <section class="card">
                <img src="/images/${placeholderPropertyObj.image}">
                <div class="card-right">
                    <h2>${placeholderPropertyObj.propertyLocation}</h2>
                    <h3>${placeholderPropertyObj.priceGBP}</h3>
                    <p>${placeholderPropertyObj.comment}</p>
                    <h3>${totalSize(placeholderPropertyObj.roomsM2)}m&sup2;</h3>
                </div>
            </section> `
    }

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(placeholderPropertyObj)

