import { FunctionalComponent } from '@stencil/core';

interface IconProps {
  clazz?: string;
}

export const IconEmail: FunctionalComponent<IconProps> = props => {
  return (
    <svg
      class={props ? props.clazz : ''}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  );
};

export const IconMenu: FunctionalComponent<IconProps> = props => {
  return (
    <svg
      class={props ? props.clazz : ''}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
    </svg>
  );
};
