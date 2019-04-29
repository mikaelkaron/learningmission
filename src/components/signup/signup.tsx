import { Component, Element, Method, Prop } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { IconEmail } from '../../icons';

@Component({
  tag: 'tlm-signup',
  styleUrl: 'signup.scss',
  shadow: false
})
export class Signup {
  @Element() el: HTMLElement;

  @Prop() label: string = 'you@mail.com';

  @Prop() text: string = 'go';

  @Prop() action!: string;

  private textField: MDCTextField;
  private buttonRipple: MDCRipple;

  @Method()
  doFocus() {
    this.textField.focus();
  }

  @Method()
  async doSubmit(): Promise<boolean> {
    const value = this.textField.value;
    if (value) {
      const button = this.buttonRipple.root_;
      const inputs = this.el.querySelectorAll('input, button');

      // reset success state
      button.removeAttribute('data-success');

      // disable inputs
      inputs.forEach((input: HTMLInputElement) => (input.disabled = true));

      // submit form
      const result: boolean = await fetch(this.action).then(
        (response: Response) => response.ok,
        () => false
      );

      // set success state
      button.setAttribute('data-success', String(result));

      // enable inputs
      inputs.forEach((input: HTMLInputElement) => (input.disabled = false));

      return result;
    }

    return false;
  }

  componentDidLoad() {
    this.textField = new MDCTextField(this.el.querySelector('.mdc-text-field'));
    this.buttonRipple = new MDCRipple(this.el.querySelector('.mdc-button'));

    this.textField.initialize();
    this.buttonRipple.initialize();
  }

  componentDidUnload() {
    this.textField.destroy();
    this.buttonRipple.destroy();
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.doSubmit();
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} action={this.action}>
        <div class='mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon'>
          <IconEmail class='mdc-text-field__icon' />
          <input class='mdc-text-field__input' type='email' id='email' />
          <div class='mdc-notched-outline'>
            <div class='mdc-notched-outline__leading' />
            <div class='mdc-notched-outline__notch'>
              <label class='mdc-floating-label' htmlFor='email'>
                {this.label}
              </label>
            </div>
            <div class='mdc-notched-outline__trailing' />
          </div>
        </div>
        <button class='mdc-button mdc-button--outlined' type='submit'>
          <span class='mdc-button__label'>{this.text}</span>
        </button>
      </form>
    );
  }
}
