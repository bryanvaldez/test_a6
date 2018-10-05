import { Component, OnInit } from '@angular/core';
import { Padron, PadronService } from '../../services/padron.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public list: Padron[];

  constructor(private _padronService: PadronService) {

   }

  ngOnInit() {
    this.list  = this._padronService.getListPadron();
  }

  submit(data) {
    console.log(data);
  }

}
