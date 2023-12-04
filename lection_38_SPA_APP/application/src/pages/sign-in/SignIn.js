import './signin.scss';
import Component from "@/plugins/Component";
import {router} from "@/router";
import Input from "@/common/components/Input/Input";

export default class SignIn extends Component {
  credentials = { login: '', password: '' };


  getTemplate() {
    return `
        <div class="sign-in d-flex justify-content-center align-items-center">
            <div class="card col-6">
                <div class="card-body">
                  <h5 class="card-title text-center mb-3"> Sign In </h5>
                  <div class="mb-2">
                    <slot name="login" ></slot>
                  </div>
                  <div class="mb-2">
                    <slot name="password"></slot>
                  </div>
                  
                  <slot name="table"></slot>
                  <button type="button" class="btn btn-success">Sign in</button>
                </div>
            </div>
        </div>
    `
  }

  onChange(value) {
    console.log('--- call onChange in  SignIn--',  value);

    this.credentials = {
      ...this.credentials,
      ...value
    };

    console.log(this.credentials, 'credentials')
  }



  updateTemplate(container) {
    const inputLogin = new Input({
      type: 'text',
      className: 'login form-control',
      placeholder: 'login',
      name: 'login',
      id: 'login',
      label: 'Input Login',
      onChange: this.onChange.bind(this),
      // credentials: this.credentials
    });

    const inputPassword = new Input({
      type: 'password',
      className: 'password form-control',
      placeholder: 'password',
      name: 'password',
      id: 'password',
      label: 'Input Password',
      onChange:  this.onChange.bind(this),
      // credentials: this.credentials bad practice -> instead state lifting
    });

    this.replaceSlot(container, [
      { selector: 'slot[name="login"]', replacer: () => inputLogin.render() },
      { selector: 'slot[name="password"]', replacer: () => inputPassword.render() },
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


//----solution -1
// render() {
  // const template = this.getTemplate();
  // router.subscribePageLoaded( () => {
  //   const login = document.querySelector('#login');
  //
  //   console.log(login, 'login');
  //
  //   login.addEventListener('change', this.onChangeLogin.bind(this));
  // })
  // /    return container.innerHTML;
// }


// ----solution - 2
// document.createElement vs innerHTML
// const login = document.querySelector('#login');
//
// console.log(login, 'login')
// --> Remember how to make template with document.createElement


// Login ---------
// const loginNode = document.createElement('input')
// loginNode.classList = 'form-control';


// const labelLoginNode = document.createElement('label')
// labelLoginNode.innerText = 'Login'
// labelLoginNode.append(loginNode)
//
// loginNode.addEventListener('change', this.onChangeLogin.bind(this));
//
// // End Login ---------
//
// // Password ---------
// const passwordNode = document.createElement('input')
// passwordNode.classList = 'form-control';
//
// const labelPasswordNode = document.createElement('label')
// labelPasswordNode.innerText = 'Password'
// labelPasswordNode.append(passwordNode)
//
// passwordNode.addEventListener('change', this.onChangePassword.bind(this));
//
// // End Password------------------
//
// const container = document.createElement('div');
// container.classList.add('sign-in')
//
// container.append(labelLoginNode)
// container.append(labelPasswordNode);
//
// /// innerHTML vs append
// setTimeout(() => {
//   document.querySelector('#app .router-view').append(container);
// }, 3000)

// https://www.npmjs.com/package/sanitize-html

