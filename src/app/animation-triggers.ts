import { trigger, state, transition, style, animate } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state('in', style({ height: '*' })),
  state('out', style({ height: 0 })),
  transition('in => out', [
    style({ height: '*' }),
    animate(250, style({ height: 0 }))
  ]),
  transition('out => in', [
    style({ height: 0 }),
    animate(250, style({ height: '*' }))
  ])
]);
