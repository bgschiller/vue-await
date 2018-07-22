# vue-await

Render blocks based on the status of a Promise. See a [demo](https://brianschiller.com/vue-await/).

```
<Await :p="todosPromise">
  <p>loading...</p>
  <div slot="then" slot-scope="[todos]">
    <TodoList :todos="todos" />
  </div>
  <p slot="catch" slot-scope="[error]">
    Uh oh, something went wrong: {{ error }}
  </p>
</Await>
```

### Installation

```
npm install --save vue-await
```

### Prior Art

- This project was inspired by [svelte](https://svelte.technology)'s [Await blocks](https://svelte.technology/guide#await-blocks).

### Caveats

- Because `slot`s cannot live at the root of a `template`, this component introduces one extra `div` of nesting. This has the potential to break some css rules using the `>` immediate child selector.
- Promises can resolve and reject with multiple arguments, so the `slot-scope` value for `slot="then"` and `slot="catch"` will always be an array. You can destructure it with `slot-scope="[result]"` if you like.

### Future Work

This would likely be better as a directive along the lines of `v-if`:

```
<div v-await="todosPromise">
    <p>loading...</p>
</div>
<div v-then="todos">
    <TodoList :data="todos" />
</div>
<div v-catch="error">
    <p>Uh oh, something went wrong: {{ error }}</p>
</div>
```

This would require a patch to the Vue core library. I intend to look into this, but don't have time just now. Note to self: [check out here](https://forum.vuejs.org/t/i-want-to-learn-the-source-code-of-v-if/16645)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
