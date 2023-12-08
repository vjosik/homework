import Component from "@/plugins/Component";

export default class RadioButton extends Component {
    constructor(config) {
        super(config);
        this.label = config.label;
        this.name = config.name;
        this.value = config.value;
    }

    getTemplate() {
        return `
        <div class="form-check">
          <input type="radio" class="form-check-input" id="${this.name}-${this.value}" name="${this.name}" value="${this.value}">
          <label class="form-check-label" for="${this.name}-${this.value}">${this.label}</label>
        </div>
        `;
    }

    onChangeHandler(event) {
        console.log('--call onChangeHandler input -- ');

        this.props.onChange({
            [this.props.name]: event.target.value
        });
    }

    bindEvent(container) {
        container.querySelector(`input`).addEventListener(
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