class ScrambleText {
  constructor(element, finalText, speed = 40) {
    this.element = element;
    this.finalText = finalText;
    this.speed = speed;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.frame = 0;
    this.queue = [];
    this.update = this.update.bind(this);
    this.setText(finalText);
  }

  setText(newText) {
    const oldText = this.element.innerText || "";
    const length = Math.max(oldText.length, newText.length);

    this.queue = [];
    for (let i = 0; i < length; i++) {
      this.queue.push({
        from: oldText[i] || "",
        to: newText[i] || "",
        start: Math.floor(Math.random() * 20),
        end: Math.floor(Math.random() * 20) + 20
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span>${char}</span>`;
      } else {
        output += from;
      }
    }

    this.element.innerHTML = output;

    if (complete === this.queue.length) {
      return;
    } else {
      this.frame++;
      this.frameRequest = requestAnimationFrame(this.update);
    }
  }
}

// INICIO
window.addEventListener("load", () => {
  const portfolio = document.getElementById("text-portfolio");
  const master = document.getElementById("text-master");

  new ScrambleText(portfolio, "PORTFOLIO");
  setTimeout(() => {
    new ScrambleText(master, "Master!");
  }, 600);
});
