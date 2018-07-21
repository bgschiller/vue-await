# vue-await

Render blocks based on the status of a Promise.

```
<Await :p="todosPromise">
  <p>loading...</p>
  <div slot="then" slot-scope="todos">
    <TodoList :todos="todos" />
  </div>
  <p slot="catch" slot-scope="error">
    Uh oh, something went wrong: {{error}}
  </p>
</Await>
```

### Prior Art

- This project was inspired by [svelte](https://svelte.technology)'s [Await blocks](https://svelte.technology/guide#await-blocks).
- It uses the custom directive structure from [this stack overflow answer](https://stackoverflow.com/a/43543814/1586229)

### Caveats

- Promises that resolve or reject with multiple arguments will lose all but the first. If you need this, you can do `<Await :p="p.then((...args) => args)" />`
- Because `slot`s cannot live at the root of a `template`, this component introduces one extra `div` of nesting. This has the potential to break some css rules using the `>` immediate child selector.

### Future Work

This would likely be better as a directive along the lines of `v-if`:

```
<div v-await="todosPromise">
    <p>loading...</p>
</div>
<div v-then="answer">
    <TodoList :data="todos" />
</div>
<div v-catch="error">
    <p>Uh oh, something went wrong: {error}</p>
</div>
```

This would require a patch to the Vue core library. I intend to look into this, but don't have time just now. Note to self: [check out here](https://forum.vuejs.org/t/i-want-to-learn-the-source-code-of-v-if/16645)

### Test

It promisify and then's even falsy objects.

It renders awaiting promise slots

It renders failed promise slots

it renders success promise slots

it lifts non-promises

it lifts even falsy non-thenables

it lifts errors, and renders catch

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
