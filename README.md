## This NPM package will create a simple react functional boilerplate component along with its CSS module.

---

#### How to install:

```
npm i -g create-react-functional-component
```

---

#### How to use:

1. Go to the location where you want to create the component.
2. Type the below command in the terminal. Make sure to modify the componentName in the below command with the name you want.

##### Creating single component

```
srfc componentName
```

##### _example:_

```
srfc Box
```

##### Creating multiple components

```
srfc componentName1 componentName2
```

##### _example:_

```
srfc Home Articles
```

##### Creating typescript components

```
srfc componentName1 componentName2 -ts
```

##### _example:_

```
srfc Home Articles -ts
```

---

#### What it will do:

##### without -ts option

This creates a component with the given component name as in the below structure if _-ts_ is not specified in the command.

```
├── currentDirectoryInTerminal
    ├── componentName
        ├── ComponentName.jsx
        ├── ComponentName.module.css
```

**ComponentName.jsx** will have the below boilerplate code.

```
import styles from "./ComponentName.module.css";

export default function ComponentName() {
  return <div className{styles.ComponentName}>ComponentName</div>;
}
```

**ComponentName.module.css** will have the below boiler plate code.

```
.ComponentName {}
```

##### with -ts option

This creates a component with the given component name as in the below structure if _-ts_ is specified in the command.

```
├── currentDirectoryInTerminal
    ├── componentName
        ├── ComponentName.tsx
        ├── ComponentName.module.css
```

All the files will have the same content as specified above, only the file name will be "tsx" instead of "jsx".
