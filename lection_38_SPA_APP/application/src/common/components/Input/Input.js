import Component from "@/plugins/Component";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler(event) {
    console.log('--call onChangeHandler input -- ');

    // this.props.credentials[this.props.name] = event.target.value; //bad practice

    this.props.onChange({
      [this.props.name]: event.target.value
    });

  /*

    {
      login: 'Valera'
    }
   */
  }

  getTemplate() {
    return `
       <label for="${this.props.id}" >
            ${this.props.label}
          <input 
            type="${this.props.type}" 
            id="${this.props.id}" 
            name="${this.props.name}" 
            class="${this.props.className}"
          />
      </label>
    `;
  }

  bindEvent(container) {
    container.querySelector('input').addEventListener(
        'change',
        (event) => this.onChangeHandler(event)
    )
  }


  render() {
    const container = document.createElement('div')
    container.innerHTML = this.getTemplate();

    this.bindEvent(container);

    return container;
  }
}