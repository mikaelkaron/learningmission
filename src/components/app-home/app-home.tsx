import { Component, Element } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { IconEmail } from '../../icons';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  @Element() el: HTMLElement;

  private textField: MDCTextField;

  componentDidLoad() {
    this.textField = new MDCTextField(this.el.querySelector('.mdc-text-field'));
    return this.textField.initialize();
  }

  componentDidUnload() {
    return this.textField.destroy();
  }

  render() {
    return [
      <section class='intro'>
        <h1>
          Traditional schooling is outdated. Our mission is to replace its
          obligated learning through duty with free learning through
          inspiration. We are working behind the scenes at the moment.
        </h1>
      </section>,
      <div class='mdc-layout-grid'>
        <div class='mdc-layout-grid__inner'>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
            <h2>Stay tuned right here:</h2>
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
                class='mdc-button mdc-button--raised'
                style={{ 'margin-left': '1em' }}
              >
                <span class='mdc-button__label'>Subscribe</span>
              </button>
            </form>
          </div>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-8'>
            <h2>Why</h2>
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
