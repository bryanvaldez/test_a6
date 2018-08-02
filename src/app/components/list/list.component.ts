import { Component } from '@angular/core';
import { PadronService } from '../../services/padron.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private lists: Array<any> ;
  constructor(private _padronService: PadronService) {
    this.lists = [
      {'key': 'stuWheelchair', 'label': 'Wheelchair', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
      {'key': 'stuWheelchair', 'label': 'Wheelchair', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
      {'key': 'stuCurbToCurb', 'label': 'Curb-to-curb', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
      {'key': 'stuAide', 'label': 'Aide', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
  ];
  }
}
