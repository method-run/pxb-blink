/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element to reproduce the defunct <blink> tag.
 *
 * @slot - This element has a slot
 */
@customElement('pxb-blink')
export class PxbBlink extends LitElement {
  static override styles = css`
    :host {
      animation: pxb-blink 1s steps(1, start) infinite;
    }

    @keyframes pxb-blink {
      50% {
        color: transparent;
      }
    }
  `;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pxb-blink': PxbBlink;
  }
}
