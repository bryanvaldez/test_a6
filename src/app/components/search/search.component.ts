import { PadronService, Padron } from '../../services/padron.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public listPadron: Padron[];
  public wordSearch: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _padronService: PadronService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.wordSearch = params.text;
      this.listPadron =  this._padronService.searchPadron(this.wordSearch);
    });
  }

}
