import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {AboutInterface} from '../interfaces/about.interface';

export const COLLEGE_ABOUT$ = new InjectionToken<Observable<AboutInterface>>(
    'About college'
);

export function aboutFactory(): Observable<AboutInterface> {
    return new Observable<AboutInterface>(observer => {
        observer.next(({
            id: 2,
            name: 'SVGC',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
            about: 'Some Very Great College',
            media_type: 1,
            vimeo_video_id: 3
        } as unknown) as AboutInterface);
    });
}
