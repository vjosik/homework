import Observer from "@/plugins/Observer";

export default class Router {
  #routes = [];
  #guardBefore = null;
  #original = null

  #observer = new Observer()

  constructor(routes) {
    this.#routes = routes;
  }

  onInit() {
    console.log('----onInit----');
    this.#original = window.history.pushState;
    window.history.pushState = this.#pushState.bind(this)
    window.onpopstate = () => this.#guard(location.pathname);
    document.addEventListener('click', this.#onClickHandler.bind(this))
    window.history.pushState({}, '', location.pathname);
  }

  setGuardBefore(cb) {
    if (!cb) return null;


    this.#guardBefore = cb;
  }

  subscribePageLoaded(cb) {
    this.#observer.subscribe(cb)
  }


  #pushState(state, title, pathTo) {
    console.log('----My pushState----');

    if (!pathTo) return;
    // before
    const pathFrom = location.pathname;

    this.#guard(pathTo, pathFrom)

  }

  #guard(pathTo, pathFrom) {
    const next = (redirect = pathTo) => {
      this.#original.apply(history, [{ pathTo, pathFrom }, null, redirect]);
      // history.pushState(state, null, '/path');
      this.#onUpdate(redirect);
    };

    if (typeof this.#guardBefore === 'function') {
      this.#guardBefore(pathTo, pathFrom, next)
    } else {
      next();
    }
  }


  #onUpdate(path = location.pathname) {
    const route = this.#findRoute(path) || this.#findRoute('*'); // toDo: refactoring
    this.#updateView(route.component);
    this.#handlePageLoaded();
  }

  #onClickHandler(event) {
    event.preventDefault();
    const node = event.target;

    if (node.dataset.routerLink) { // behaviour
      window.history.pushState({}, '', node.dataset.routerLink)
    }
  }

  #findRoute(path) {
    if (!path) return null;
    return this.#routes.find(route => route.path === path);
  }

  #updateView(Component) {
    // setTimeout(() => {
    //   document.querySelector('.router-view').innerHTML = new Component().render()
    //
    // }, 3000)

    const routerView = document.querySelector('.router-view');
    routerView.innerHTML = '';
    routerView.append(new Component().render())

    //all
  }


  #handlePageLoaded() {
    this.#observer.broadcast()
  }
}