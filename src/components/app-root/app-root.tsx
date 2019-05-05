import { Component, Element } from '@stencil/core';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {
  @Element() el: HTMLElement;

  private topAppBar: MDCTopAppBar;

  componentDidLoad() {
    this.topAppBar = new MDCTopAppBar(this.el.querySelector('.mdc-top-app-bar'));
    this.topAppBar.initialize();
  }

  componentDidUnload() {
    this.topAppBar.destroy();
  }

  render() {
    return [
      <header class='mdc-top-app-bar mdc-top-app-bar--fixed'>
        <div class='mdc-top-app-bar__row'>
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <span class='mdc-top-app-bar__title'>The Learning Mission</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <a href="#" class='mdc-top-app-bar__link'>About</a>
            <a href="#" class='mdc-top-app-bar__link'>Why</a>
            <a href="#" class='mdc-top-app-bar__link'>Contact</a>
          </section>
        </div>
      </header>,
      <div class='mdc-top-app-bar--fixed-adjust'>
        <stencil-router root='/learningmission/'>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </div>
    ];
  }
}
