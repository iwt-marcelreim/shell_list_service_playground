import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '@marci/search';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  addresses: string[] = [];

  constructor(private cartService: SearchService) {}

  ngOnInit(): void {
    //subscribe to product component
    this.subscription = this.cartService.getMessage().subscribe(
      address => {
          console.log("inside");
          debugger;
          this.addresses.push(address);
      },
      error=>{console.error(error)}
    );
  }

  // constructor(private cartService: SearchService) {
  //   // subscribe to product component
  //   this.subscription = this.cartService.getMessage().subscribe(address => {
  //         console.log("inside");
  //         debugger;
  //         this.addresses.push(address)
  //         //items.forEach(item => this.addresses.push(item));

  //   });
  // }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
