# div

> &lt;Div row&gt; Use flexbox with ease in React! &lt;/Div&gt;

[![NPM](https://img.shields.io/npm/v/div.svg)](https://www.npmjs.com/package/div) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

* Easy to read & use flexbox!
* Accepts all standard div props! (like `style`, `className` and `id`)
* Typescript support!

## Install

```bash
# with yarn:
yarn add div

# with npm:
npm install --save div
```

## Usage

```tsx
import React, { Component } from 'react'

import { Div } from 'div'

const Example = () => {
  return (
    <Div row>
      <Div column flex={1}>
        A third of the space
      </Div>
      <Div column flex={2}>
        Two thirds of space!
      </Div>
    </Div>
  )
}
```

## Props

(All props are optional)

### `flex`: {number | string}

* Applies `flex: {number}`.
* Reminder: the flex shorthand params are in this order:
  `flex-grow`, `flex-shrink`, `flex-basis` (without commas)

### `row`: {boolean}

* Makes div a flex row.
* Applies `display: flex` and `flex-direction: row`.

### `column`: {boolean}

* Makes div a flex column.
* Applies `display: flex` and `flex-direction: column`.

### `reverse`: {boolean}

* Reverses the flex-direction if `column` or `row` are specified.

### `wrap`: {boolean}

* Applies `flex-wrap: 'wrap'`.
* By default, a div's `flex-wrap` is `'nowrap'`.

### `center`: {boolean}

* Centers content if `row` or `column` are specified.
* Applies `justify-content: 'center'` and `align-items: 'center'`.

## License

MIT © [Wulf](https://github.com/Wulf)
