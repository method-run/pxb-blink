---
layout: page.11ty.cjs
title: <pxb-blink> ⌲ Home
---

# &lt;pxb-blink>

`<pxb-blink>` is a web component that attempts to reproduce the behavior of the deprecated `<blink>` HTML tag. It does so imperfectly, by animating the CSS `color` property. That means any inner elements with their own font color styles applied will break the animation.

## As easy as HTML

<section class="columns">
  <div>

`<pxb-blink>` is just an HTML element. You can it anywhere you can use HTML!

```html
<pxb-blink>I blink</pxb-blink>
```

  </div>
  <div>

<pxb-blink>I blink</pxb-blink>

  </div>
</section>

## Zero config

`<pxb-blink>` has no config options! Except for the blinking effect on text, it does nothing. Just put contents in it the way you would a `<span>`.

## Declarative rendering

<section class="columns">
  <div>

`<pxb-blink>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;pxb-blink&gt;</h2>
    <pxb-blink>I blink</pxb-blink>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;pxb-blink&gt;</h2>
<pxb-blink>I blink</pxb-blink>

  </div>
</section>
