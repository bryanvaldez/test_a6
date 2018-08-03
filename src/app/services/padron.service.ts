import { Injectable } from '@angular/core';

@Injectable()
export class PadronService {

    private list: Padron[];

    constructor() {
        this.list = [
            {'key': 'stuWheelchair', 'label': 'Wheelchair', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': 'stuWheelchair', 'label': 'Wheelchair', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': 'stuCurbToCurb', 'label': 'Curb-to-curb', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': 'stuAide', 'label': 'Aide', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
        ];
    }

    getListPadron() {
        return this.list;
    }
}

export interface Padron {
    key: String;
    label: String;
    required: boolean;
    order: number;
    controlType: String; 
    visible: boolean;
    disabled: boolean;
    type: String;
  }