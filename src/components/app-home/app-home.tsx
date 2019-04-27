import { Component, Element } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { IconEmail } from '../../icons';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  @Element() el: HTMLElement;

  private textField: MDCTextField;
  private buttonRipple: MDCRipple;

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

  render() {
    return [
      <section class='intro'>
        <div>
          <h1>
            Traditional schooling is outdated. Our mission is to replace its
            obligated learning through duty with free learning through
            inspiration.
          </h1>
          <h2>We are working behind the scenes at the moment.</h2>
        </div>
      </section>,
      <div class='mdc-layout-grid'>
        <div class='mdc-layout-grid__inner'>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
            <h3>Stay tuned right here:</h3>
            <form>
              <div class='mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon'>
                <IconEmail class='mdc-text-field__icon' />
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
                class='mdc-button mdc-button--outlined'
                style={{ 'margin-left': '1em' }}
              >
                <span class='mdc-button__label'>Subscribe</span>
              </button>
            </form>
          </div>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-8'>
            <h3>Why</h3>
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
    ];
  }
}
