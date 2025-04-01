import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("rz-fontsize")
export class RzFontsize extends LitElement {
  @property()
  fontSize = "medium";

  render() {
    return html`
      ${this.getStyles()}
      <div class="fs_area">
        <span class="small fs" @click="${this.onSmall}">&nbsp;S&nbsp;</span>
        <span class="medium fs" @click="${this.onMedium}">&nbsp;M&nbsp;</span>
        <span class="large fs" @click="${this.onLarge}">&nbsp;L&nbsp;</span>
        <span class="xlarge fs" @click="${this.onXlarge}">&nbsp;XL&nbsp;</span>
      </div>
    `;
  }

  onSmall() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "small";
  }

  onMedium() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "medium";
  }

  onLarge() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "large";
  }

  onXlarge() {
    let htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.style.fontSize = "x-large";
    console.info("onXlarge fontSize: ", this.fontSize);
  }

  static styles = css``;

  getStyles() {
    return html`
      <style>
        @import url("rz-fontsize/rz-fontsize.css");
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rz-fontsize": RzFontsize;
  }
}
