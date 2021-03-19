import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollegeComponent} from './components/college/college.component';
import {AboutRoutingModule} from './about.routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [CollegeComponent],
    imports: [
        CommonModule,
        AboutRoutingModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatButtonModule,
        TranslateModule],
})
export class AboutModule {
}
