import { useEffect } from 'react';

type Ref = React.MutableRefObject<HTMLElement | null>;
type EventHandler = (event: Event) => void;

export const useOnClickOutside = (ref: Ref, handler: EventHandler) => {
	useEffect(() => {
		const listener = (event: Event) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};
