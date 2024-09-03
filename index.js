import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"
import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"

function selectIfStateAvaible(){
    // console.log(propertyForSaleArr)
    // propertyForSaleArr.forEach(function(e){
    //     console.log(e)
    // })
    // const properties = propertyForSaleArr.map(function(e){
    //     return e.comment
    // })
    // console.log(properties)

}

function totalSize(params=[]){
    const totalSum = params.reduce(function(prev, cur){
        return prev + cur
    },0)
    return totalSum
}

function getPropertyHtml() {
    const property = propertyForSaleArr.map(function(e){
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
document.getElementById('container').innerHTML = getPropertyHtml()

