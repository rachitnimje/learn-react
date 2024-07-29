# Core concepts of React

<h2>My understandings and learnings of the core concepts of React.

### Contents:
- Fiber
- Virtual DOM
- Reconcilicaiton

## What is Reconciliation?

It is the algo that diffrentiates one tree with another to determine which parts are updated/changed.<br>
When you render an app using React, it will create a tree and will be stored in the memory. And then it is taken to the rendering enviroment (browser) and translated to a set of DOM operations. When the app is updates using useState, the reconciliation kicks in and checks for the parts that are updated.

## Reconciliation is different from Rendering

## Fiber
