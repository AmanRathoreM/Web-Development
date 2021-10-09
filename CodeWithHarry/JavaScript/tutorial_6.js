//* Date 09-10-2021

//* In this tutorial you will learn about String properties, Methods and Templates literals

console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));

let naam="Aman";
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${naam}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

//! document.body.innerHTML = myHtml;            
//! document.getElementById("JavaScriptHtml").innerHTML = myHtml;            

