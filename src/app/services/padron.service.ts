import { Injectable } from '@angular/core';

@Injectable()
export class PadronService {

    private list: Padron[];

    constructor() {
        this.list = [
            {'key': '1', 'label': 'Bryan Luis', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': '2', 'label': 'Bryan Jose', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': '3', 'label': 'Edgar', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': '4', 'label': 'Roger', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
        ];
    }

    getListPadron() {
        return this.list;
    }
    searchPadron(text: string): Padron[] {
        const response: Padron[] = [];
        text = text.toLowerCase();
        for (const person of this.list) {
            const name = person.label.toLowerCase();
            if (name.indexOf(text) >= 0) {
                response.push(person);
            }
        }
        return response;
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
