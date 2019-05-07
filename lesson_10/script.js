// let div = document.getElementsByTagName('div');

class Options {
  constructor (height = 50, width = 100, bg = '#98FB98', fontSize = 20, textAlign = 'center') {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  text() {
    let div = document.createElement('div');
    div.textContent = `Hello World`;
    document.body.appendChild(div);
    div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
  }
}
const content = new Options();

content.text('div');

