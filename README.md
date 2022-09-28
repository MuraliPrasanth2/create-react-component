## This NPM package will create a simple react functional boilerplate component along with its CSS module.

----------
#### How to install:
```
npm i -g create-react-functional-component
```
----------
#### How to use:
1. Go to the location where you want to create the component.
2. Type the below command in the terminal. Make sure to modify the componentName in the below command with the name you want.
  
##### Creating single component
```
srfc componentName
```
##### *example:*
```
srfc Box
```

##### Creating multiple components
```
srfc componentName1 componentName2
```
##### *example:*
```
srfc Home Articles
```
----------
#### What it will do:

This creates a component with the given component name as in the below structure.

```
├── currentDirectoryInTerminal
    ├── componentName
        ├── ComponentName.js
        ├── ComponentName.module.css
```

**ComponentName.js** will have the below boilerplate code.
```
import styles from "./ComponentName.module.css";

export default function ComponentName() {
  return <div>ComponentName</div>;
}
```


**ComponentName.module.css** will have the below boiler plate code.

```
.ComponentName {}
```