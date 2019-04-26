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
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-12 intro'>
            <h1>
              Traditional schooling is outdated. Our mission is to replace its
              obligated learning through duty with free learning through
              inspiration. We are working behind the scenes at the moment.
            </h1>
            <p>Stay tuned right here:</p>
            <form>
              <div class='mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon'>
                <svg
                  class='mdc-text-field__icon'
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
                      you@mail.com
                    </label>
                  </div>
                  <div class='mdc-notched-outline__trailing' />
                </div>
              </div>
              <button
                class='mdc-button mdc-button--raised'
                style={{ 'margin-left': '1em' }}
              >
                <span class='mdc-button__label'>Subscribe</span>
              </button>
            </form>
          </div>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
            <p>
              The world is constantly developing, yet traditional schooling has
              not changed its learning principles for 200 years, and every day
              school children are living up to outdated expectations instead of
              their own. Children of today do not need obligations,
              predetermined schedules, curriculums, standardized rating or to
              grow at a controlled learning pace. Most of the worlds educational
              systems are forcing children to adapt a rational mindset, but we
              need creative students to solve the problems of tomorrow.
            </p>
            <p>
              This is why we have started The Learning Mission. To help
              accelerate the inevitable implementation of a healthier school
              system.
            </p>
            <p>
              We have recently started and we are expanding our team of
              volunteers weekly. If you wish to help us complete our mission,
              please get in touch.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
