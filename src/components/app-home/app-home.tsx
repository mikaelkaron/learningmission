import { Component, Element } from '@stencil/core';
import { MDCTextField } from '@material/textfield';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  @Element() el: HTMLElement;

  componentDidLoad() {
    new MDCTextField(this.el.querySelector('.mdc-text-field'));
  }

  render() {
    return (
      <div class='mdc-layout-grid'>
        <div class='mdc-layout-grid__inner'>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
            <p>
              Traditional schooling is outdated. Our mission is to replace its
              obligated learning through duty with free learning through
              inspiration. We are working behind the scenes at the moment. Stay
              tuned right here:
            </p>
          </div>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
            <div class='mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon'>
              <svg
                class='material-icons mdc-text-field__icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                <path d='M0 0h24v24H0z' fill='none' />
              </svg>
              <input class='mdc-text-field__input' id='email' />
              <div class='mdc-notched-outline'>
                <div class='mdc-notched-outline__leading' />
                <div class='mdc-notched-outline__notch'>
                  <label class='mdc-floating-label' htmlFor='email'>
                    Email
                  </label>
                </div>
                <div class='mdc-notched-outline__trailing' />
              </div>
            </div>
            </div>
            <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-6'>
            <button class="mdc-button mdc-button--raised">
  <span class="mdc-button__label">Button</span>
</button>

          </div>
        </div>
      </div>
    );
  }
}
