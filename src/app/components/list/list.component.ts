import { Component, OnInit } from '@angular/core';
import { PadronService, Padron} from '../../services/padron.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listPadron: Padron[];
  constructor(private _padronService: PadronService) {}

  ngOnInit() {
    this.listPadron = this._padronService.getListPadron();
    console.log(this.listPadron);
  }
}

