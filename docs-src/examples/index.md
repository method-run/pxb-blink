---
layout: example.11ty.cjs
title: <pxb-blink> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  pxb-blink p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<pxb-blink>
  <p>This is <em>child</em> content</p>
</pxb-blink>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<pxb-blink>
  <p>This is <em>child</em> content</p>
</pxb-blink>
```
