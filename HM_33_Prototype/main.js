function HTMLElement(className, id) {
    console.log("---call HTMLElement ---", this);
    this.className = className;
    this.id = id;
}

HTMLElement.prototype.render = function () {
  console.log("Tag rendered from HTMLElement.prototype", this);
};

HTMLElement.prototype.rotate = function () {
    console.log("Common rotate", this);
};

const mySuper = (context, parentCnstr, args) => {
  parentCnstr.apply(context, args);
};

function IMGElement(src, ...args) {
  mySuper(this, HTMLElement, args);
  this.src = src;
}

IMGElement.prototype = Object.create(HTMLElement.prototype);

IMGElement.prototype.showPicture = function () {
  console.log("show picture", this.src);
};

function AnchorElement(href, className, id, flag = false) {
  mySuper(this, HTMLElement, [className, id]); // ==>  HTMLElement.apply(this, args);
  this.href = href;

  if (flag) {
    this.redirect = function () {
      console.log("---special redirect---");
    };
  }
}

// AnchorElement.prototype.__proto__ = HTMLElement.prototype;
AnchorElement.prototype = Object.create(HTMLElement.prototype);

AnchorElement.prototype.redirect = function () {
  console.log("rendireting....", this.href);
};

AnchorElement.prototype.rotate = function () {
  console.log("--- special for Anhors-----");
};

const link = new AnchorElement(
  "https://rogaTakopita.com",
  "link-className",
  "link-id"
);
const link2 = new AnchorElement("https://frizbiz.com", "link", "link", true);

const img = new IMGElement("./assets/img/picture.jpg", "picture", "logo");


console.log(link, "link");
console.log(link.hasOwnProperty);

console.log(HTMLElement.prototype.__proto__ === Object.prototype);

//----------Homework-------------

function HTMLElementinput (name, surname, age, href){
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.href = href,
        function print (){
            console.log(this.name)
        }
}

HTMLElementinput.prototype = Object.create(AnchorElement.prototype);

const inputElem = new HTMLElementinput("Ihor", "Vzhos", "22", "https://gg.com")
console.log(inputElem, "HTMLElementinput")
console.log(inputElem.redirect(), "-----HTMLElementinput redirect-----")
console.log(inputElem.rotate(), "-----HTMLElementinput rotate-----")
console.log(inputElem.render(), "-----HTMLElementinput render-----")