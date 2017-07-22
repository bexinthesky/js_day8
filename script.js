// body tag made into a variable for debugging
var body = document.body;
console.log(body);

// create ul html tag, give it an id and use appendChild to nest it inside the nav tag
var ul = document.createElement('ul');
ul.id = 'ul-id';

document.getElementById('nav-tag').appendChild(ul);

// create list html tags and use append to nest them inside the ul tag
var li1 = document.createElement('li'),
  li2 = document.createElement('li'),
  li3 = document.createElement('li'),
  li4 = document.createElement('li');

document.getElementById('ul-id').append(li1, li2, li3, li4);

// give the list tags ids
li1.id = 'li1';
li2.id = 'li2';
li3.id = 'li3';
li4.id = 'li4';

// create anchor tag for first list item, give it an href and innerText, and use append to nest it inside first list item
var a1 = document.createElement('a');
a1.setAttribute('href', "#");
a1.innerText = "home";

document.getElementById('li1').append(a1);

// create anchor tag for second list item, give it an href and innerText, and use append to nest it inside second list item
var a2 = document.createElement('a');
a2.setAttribute('href', "#");
a2.innerText = "about";

document.getElementById('li2').append(a2);

// create anchor tag for third list item, give it an href and innerText, and use append to nest it inside third list item
var a3 = document.createElement('a');
a3.setAttribute('href', "#");
a3.innerText = "projects";

document.getElementById('li3').append(a3);

// create form tag, give it an id, and use append nest it inside fourth list item
var form = document.createElement('form');
form.id = 'form-id';

document.getElementById('li4').append(form);

// create third input tag, give it an id, use append to nest it inside the form tag, and set attributes
var input3 = document.createElement('input');
input3.id = 'input3';
input3.setAttribute("type", "submit");
input3.setAttribute("value", "go");

document.getElementById('form-id').append(input3);

// create second input tag, give it an id, use insertBefore to nest it inside the form tag, and set attributes
var input2 = document.createElement('input');
input2.id = 'input2';
input2.setAttribute("type", "password");
input2.setAttribute("placeholder", "password");

var par = document.getElementById('form-id');
par.insertBefore(input2, par.childNodes[0]);

// create first input tag, give it an id, use insertBefore to nest it inside the form tag, and set attributes
var input1 = document.createElement('input');
input1.id = 'input1';
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "username");

par.insertBefore(input1, par.childNodes[0]);

// js assignment ↓	↓
/* JS-ify this!!
<ul>
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">projects</a></li>
    <li>
        <form>
            <input type="text" placeholder="username">
            <input type="password" placeholder="password">
            <input type="submit" value="go">
        </form>
    </li>
</ul>
*/
