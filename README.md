# React Coding Blog - Components Based Architecture
**LEARN HOW TO CREATE A CODING APP WITH FUNCTIONAL COMPONENTS**

## Layout Sections

1. Main Navigation

2. Promo (main advertisement)

3. A list of newest posts previews(intros)

4. The footer

## Organize your code

1. Group by features or

2. Group by file type

**NB: DONT NEST THE FOLDERS TO DEEP, USE KISS METHOD**

## Structure 

1. Add a components folder, then add the numerous components for each layout section

2. You'll now have the Nav, Several Intros and Footer components in one folder

### Importing and Exporting

1. Default Export
```js
export default Header;
```

2. Named Export
```js
export {Header}
```

3. Default Import
```js
import {Header}
//Alternative Way
import Header from './components'
```

### Difference between a Component and a Module

1. A **Component** is a small piece of functionality whereas e.g Footer

2. A **Module** is a series of components

**NB: Splitting code into several Modules is known as Modular Programming. GREAT FOR REACT!!**

### Structuring in React

1. Place all components in a folder named **components** This would then fall under grouping similar files together

### React Props/Properties

1. Responsible for passing data between components

2. Arguments are passed like HTML attributes

3. They use the keyword Props

4. You can send multiple data types

5. You can get flexible dynamic content

**THESE ARE LIMITED**

### Rendering Html and Props

1. Wrap it in a top level element or use a fragmant `<> and </>`

2. `props.children` is a special prop that is automatically passed to every component

3. Using external css requires you to add the link into the index.html file, to add inline css use the `<h1 style={{color:"tomato",fontSize:"40px"}}>` and camelCase words with hyphens. 

4. An alternative is to assign the css variables to a const then simply pass it on like below
```js
const styles = {
    color: "tomato",
    fontSize: "40px"
}
```
Then to call it simply pass on the variable name in the style e.g. `<h1 style={styles}>`

## Function Expressions and Arrow Functions
Example of a Componet in React

```js
function Nav(props){

    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

export default Nav
```

**The example below is a converion of the above function into a function expression**

```js
const Nav = function(props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```
**The change is now that a nameless function has been asssigned to a const variable Nav**

**_NB: THIS DOESNT CHANGE THE WAY THE FUNCTION IS RENDERED_**
```js
<Nav first="Home"/>
```

### Arrow Function
```js
const Nav = (props) => {
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

#### A few notable things have changed

1. The `=>` has replaced the keyword function

2. The `(props)` parameter is placed before the function

3. This is a bit shorter and a Key feature of ES6

4. Using parenthesis is optional when there is a single parameter

5. **Implicit Return** Works if it is on the same line as the arrow itself

```js
const Nav = () => {} <ul><li>Home</li></ul>
```

An alternative would be to take the smallest possible ES5 anonymous function

```js
const example = function(){}
```

Convert it into an Arrow function
```js
const example = () => {}

```

Using Arrow Functions in other scenarios
```js
[10,20,30,40].forEach(item => item*10)
```
Writing the above function in ES5

```js
[10,20,30,40].forEach(function(item) {
    return item * 10
})

//Alternatively
function(item){
    return item * 10
}

```

ES6 FUNCTION equivalent
```js
item => item *10
```

### Tenary Operators

```js
let name = 'Bob';

if (name == 'Bob') {
    console.log('Hello, Bob');
} else {
    console.log('Hello, Friend');
};

```
First Half of the Tenary Operator reperesents the if statement `?`

```js
name = "Bob"
name == "Bob" ?
```

Second Half of the Tenary Operator represents the else `:`
```js
name == "Bob" ? "Yes, it is Bob" : "I dont know you"
```

## React Event Errors

Handling Errors in Vanilla Js

e.g
`(5).toUpperCase()` will throw an error therefore use a `try` and `catch`

```js
try{

}catch(error){
    console.log("ERROR \n--YOU CAN ONLY UPPERCASE LETTERS AND WORDS--\n\n",error)
}

```

**HANDLING ERRORS IN A REACT COMPONENT**
```js
function NumBillboard(props){
    return(
        <>
            <h1>
                {prop.num}
                // The error is in the missing s on the prop word
            </h1>
        </>
    )
}

export default NumBillboard;
```

## HANDLING EVENTS

Presume you want to Open a menu on a website

1. Click a Button is the [ EVENT ]

2. onClick is the [ Event Handler ]

3. Opening the Menu is the [ Action ]to be performed by the onclick

e.g. 
```html

<button id="js-btn" onclick = "clickHandler()">
    Click Me
</button>
```

REACT HANDLING AN EVENT
```js
<button onClick = {clickHandler}>
    Click Me
</button>

```
Alternatively you can pass the data using a prop through the App file

#### There are numerous ways to handle an event and embedd an expression in React

1. Inline anonymous ES5 Function

```js
<button onClick = {
    function() {
        console.log("Passing an inline function directly into the OnClick Listener Evemt")
    }}> 
    Click Me
</button>
```

2. Inline, anonymous ES6 (arrow function)

```js
<button onClick = { () => console.log("Passing an inline anonymous Arrow Function directly into the OnClick Listener Evemt")}> 
    Click Me
</button>
```

3. Using a seperate function declaration

```js
function App(){
    function sepFunction(){
        console.log("Passing a seperate function to the onclick listener. This works particularly when the logic is too complex to fit into an anonymous function")
    }

    <button onClick = {sepFunction}> 
        Click Me
    </button>

}
```


4. Using a seperate function expressions

```js
function App(){
    const sepFunction = () =>console.log("Passing a function expression to the onclick listener. This is very common in react as it allows our code to span several lines if need be")
    

    <button onClick = {sepFunction}> 
        Click Me
    </button>

}
```

#### HANDLING EVENTS BASED ON USER INPUT



