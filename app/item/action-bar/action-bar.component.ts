// angular
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'action-bar-custom',
    templateUrl: './action-bar.component.html'
})
export class ActionBarComponent {

    @Input() title: string;
}
