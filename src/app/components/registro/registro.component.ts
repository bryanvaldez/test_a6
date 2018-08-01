import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

    list: Array<any> = [
        {'key': 'stuWheelchair', 'label': 'Wheelchair', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
        {'key': 'stuWheelchair', 'label': 'Wheelchair', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
        {'key': 'stuCurbToCurb', 'label': 'Curb-to-curb', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
        {'key': 'stuAide', 'label': 'Aide', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
    ];

}
