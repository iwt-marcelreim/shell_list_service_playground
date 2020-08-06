import { Component, OnInit } from '@angular/core';
import { SearchService } from '@marci/search';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  addresses: string[] = [];
  constructor(
    private service: SearchService) { }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(item => {
      debugger;
      item.forEach(string => this.addresses.push(string));
    });

  }

}
