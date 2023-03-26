import { AnimationTriggerMetadata, trigger, transition, style, animate } from "@angular/animations";

export const navigationAnimation = (): AnimationTriggerMetadata =>
	trigger(
		'navigationAnimation',
		[
			transition(
				':enter',
				[
					style({ clipPath: 'circle(0px at calc(100% - 0px) 0px)' }),
					animate('500ms ease-in',
						style({ clipPath: 'circle(100%)' }))
				]
			),
			transition(
				':leave',
				[
					style({ clipPath: 'circle(100%)' }),
					animate('500ms ease-out',
						style({ clipPath: 'circle(0 at calc(100% - 0px) 0px)' }))
				]
			)
		]
	);
