import { CatFactService } from './../../shared/services/cat-fact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  facts$?: any;

  constructor(private CatFactService: CatFactService) { }

  ngOnInit(): void {
    this.facts$ = this.CatFactService.getCatFacts();
    this.facts$.subscribe();
  }

}
