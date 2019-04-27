import { Component, Element } from '@stencil/core';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { IconMenu } from '../../icons';
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
            <a href='#' class='material-icons mdc-top-app-bar__navigation-icon'>
              <IconMenu />
            </a>
            <span class='mdc-top-app-bar__title'>The Learning Mission</span>
          </section>
        </div>
      </header>,
      <div class='mdc-top-app-bar--fixed-adjust'>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </div>
    ];
  }
}
