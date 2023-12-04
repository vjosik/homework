import './notification.scss'
import Queue from "@/plugins/Queue";
import Component from "@/plugins/Component";

export default class Notification extends Component{
  #mls = null;
  #notificationNode = null;
  #queue = null;

  constructor(props) {
    super(props);


    this.#queue = new Queue(this.updateNotification.bind(this));
  }

  updateNotification(config) {
    this.#show(config);

    setTimeout(() => {
      this.#hide(config.type);
      this.#queue.next();
    }, this.props.mls || 5000);
  }

  addMessage(config) {
    if (config.type && config.message) {
      this.#queue.enqueue(config);
    }
  }

  // notification fade => notification success => notification info fade => aler fade

  #show(config) {
    this.#notificationNode.classList.add(config.type);
    this.#notificationNode.innerText = config.message;
    this.#notificationNode.classList.remove("fade");
  }

  #hide(type) {
    this.#notificationNode.classList.add("fade");
    this.#notificationNode.innerText = "";
    this.#notificationNode.classList.remove(type);
  }


  getTemplate() {
    return `
      <div class="alert alert-danger" role="alert">
            A simple warning alert—check it out!
      </div>
    `
  }

  render() {
    this.#notificationNode = document.createElement("div");
    this.#notificationNode.classList.add("notification-wrapper", "fade");
    this.#notificationNode.innerHTML = this.getTemplate();

    return this.#notificationNode;
  }
}