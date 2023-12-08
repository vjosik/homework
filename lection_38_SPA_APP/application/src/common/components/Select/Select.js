import Component from "@/plugins/Component";

export default class Select extends Component {
    constructor(config) {
        super(config);
        this.config = config;
        this.options = config.options || [];
        this.name = config.name || '';
    }

    onChangeHandler(event) {
        console.log('--call onChangeHandler select -- ');
        console.log(this.config, "config")
        this.config.onChange({
            [this.config.name]: event.target.value
        });

    }
    getTemplate() {
        const optionsHtml = this.options.map(option => `<option value="${option.value}">${option.label}</option>`).join('');

        return `
      <div class="form-group">
        <label for="${this.name}"></label>
        <select class="form-control" id="${this.name}" name="${this.name}">
          ${optionsHtml}
        </select>
      </div>
    `;
    }
    bindEvent(container) {
        container.querySelector('select').addEventListener(
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