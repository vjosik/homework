import Component from "@/plugins/Component";
import Notification from "@/common/components/Notification";

export default class App extends Component {
  getTemplate() {
    return `
        <header class="header">
          <span class="header__logo">JS Native SPA</span>
        </header>
        <div class="router-view"></div>
        <slot name="notification"></slot>
    `
  }

  updateTemplate(container) {
    const notification = new Notification()

    this.replaceSlot(container, [
      { selector: 'slot[name="notification"]', replacer: () => notification.render() },
    ])


    return container;
  }

  render() {
    const container = document.createElement('main');
    container.classList.add('main-app')
    container.innerHTML = this.getTemplate();

    return this.updateTemplate(container);
  }
}