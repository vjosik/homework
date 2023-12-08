import './signup.scss';
import Component from "@/plugins/Component";
import { router } from "@/router";
import Input from "@/common/components/Input/Input";
import Select from "@/common/components/Select/Select";
import RadioButton from "@/common/components/RadioButton/RadioButton";

export default class SignUp extends Component {
    credentials = { email: '' };



    getTemplate() {
        return `
        <div class="sign-up d-flex justify-content-center align-items-center">
      <div class="card col-6">
        <div class="card-body">
          <h5 class="card-title text-center mb-3">Sign Up</h5>

          <!-- Username Input -->
          <div class="mb-2">
            <label for="username">Username:</label>
            <slot name="username" ></slot>
          </div>

          <!-- Email Input -->
          <div class="mb-2">
            <label for="email">Email:</label>
            <slot name="email"></slot>
          </div>

          <!-- Gender Select -->
          <div class="mb-2">
            <label for="gender">Gender:</label>
            <slot name="gender"></slot>
          </div>

          <!-- Radio Buttons for Gender -->
          <div class="mb-2">
            <label for="male">Male:</label>
            <slot name="male"></slot>
          </div>
          <div class="mb-2">
            <label for="female">Female:</label>
            <slot name="female"></slot>
          </div>
          <button type="button" class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
    `
    }

    onChange(value) {
        console.log('--- call onChange in SignUp --', value);

        this.credentials= {
            ...this.credentials,
            ...value
        };

        console.log(this.credentials, 'user');
    }

    updateTemplate(container) {

        const inputEmail = new Input({
            type: 'email',
            className: 'email form-control',
            placeholder: 'email',
            name: 'email',
            id: 'email',
            label: 'Input email',
            onChange: this.onChange.bind(this),
            // credentials: this.credentials
        });

        const inputUsername = new Input({
            type: 'text',
            className: 'Username form-control',
            placeholder: 'Username',
            name: 'Username',
            id: 'Username',
            label: 'Input Username',
            onChange: this.onChange.bind(this),
            // credentials: this.credentials
        });

        const selectGender = new Select({
            label: 'Select gender',
            name: 'selectGender',
            options: [
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
            ],
            onChange: this.onChange.bind(this)
        });

        const radioButtonMale = new RadioButton({
            label: 'male',
            name: 'gender',
            value: 'male',
            onChange: this.onChange.bind(this)
            
        });

        const radioButtonFemale = new RadioButton({
            label: 'female',
            name: 'gender',
            value: 'female',
            onChange: this.onChange.bind(this)
        });

        this.replaceSlot(container, [
            { selector: 'slot[name="username"]', replacer: () => inputUsername.render() },
            { selector: 'slot[name="email"]', replacer: () => inputEmail.render() },
            { selector: 'slot[name="gender"]', replacer: () => selectGender.render() },
            { selector: 'slot[name="male"]', replacer: () => radioButtonMale.render() },
            { selector: 'slot[name="female"]', replacer: () => radioButtonFemale.render() },
        ])

        return container;
    }

    
    onClickHandler() {
        console.log('click');
        
    }

    bindEvent(container) {
        container.querySelector('button').addEventListener('click', this.onClickHandler.bind(this));
    }

    render() {
        const container = document.createElement('div')
        container.innerHTML = this.getTemplate();

        this.updateTemplate(container)
        this.bindEvent(container);

        return container;
    }

}