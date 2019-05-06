import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  private signup: HTMLTlmSignupElement;

  focusSignup(event: MouseEvent) {
    this.signup.doFocus();
    event.preventDefault();
  }

  render() {
    return [
      <div class='splash'>
        <section>
          <h1>
            Traditional schooling is outdated, and our mission is to replace its
            obligated learning through duty with free learning through
            inspiration.
          </h1>
        </section>
        <section>
          <h2>
            We are working behind the scenes at the moment, but you can stay
            tuned right here:
          </h2>
          <tlm-signup
            action='/learningmission/'
            ref={el => (this.signup = el as HTMLTlmSignupElement)}
          />
        </section>
      </div>,
      <div class='mdc-layout-grid'>
        <div class='mdc-layout-grid__inner'>
          <div class='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
            <h3 id='why'>Why</h3>
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
              please{' '}
              <a href='#' onClick={event => this.focusSignup(event)}>
                get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    ];
  }
}
