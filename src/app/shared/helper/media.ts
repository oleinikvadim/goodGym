import { Observable, fromEvent, startWith, map } from "rxjs";

export function media(query: string): Observable<boolean> {
	const mediaQuery = window.matchMedia(query);
	return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
		startWith(mediaQuery),
		map((list: MediaQueryList) => list.matches)
	);
}
