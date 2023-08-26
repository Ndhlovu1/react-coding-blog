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