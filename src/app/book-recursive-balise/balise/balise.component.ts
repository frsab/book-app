import { Component, OnInit, Input } from '@angular/core';
import { Balise } from '../../shared/interfaces/balise';

@Component({
  selector: 'app-balise',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.scss']
})
export class BaliseComponent implements OnInit {
  @Input() baliseRoot: Balise;
  constructor() { }

  ngOnInit() {
  }

}
