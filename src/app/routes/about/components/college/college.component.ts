import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {aboutFactory, COLLEGE_ABOUT$} from '../../providers/about.providers';
import {AboutInterface} from '../../interfaces/about.interface';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../../../environments/environment';

@Injectable()
@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.css'],
    providers: [
        {provide: COLLEGE_ABOUT$, useValue: aboutFactory()}
    ]
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;
    isLoading = true;

    constructor(
        private translateService: TranslateService,
        @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>
    ) {
    }

    ngOnInit() {
        this.translateService.use(environment.defaultLocale);
        this.getCollege();
    }

    getCollege(): void {
        this.college$.subscribe(college => {
            this.college = college;
            this.isLoading = false;
        });
    }
}
