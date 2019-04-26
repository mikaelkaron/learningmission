import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {
  render() {
    return [
      <header class='mdc-top-app-bar mdc-top-app-bar--fixed'>
        <div class='mdc-top-app-bar__row'>
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <a href='#' class='material-icons mdc-top-app-bar__navigation-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
              </svg>{' '}
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
