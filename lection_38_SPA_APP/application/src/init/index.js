

export default function init(App, libs) {
  document.querySelector('#app').append(new App().render());
  libs.forEach(lib => lib.onInit());
}