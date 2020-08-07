import { Component, Input } from '@angular/core';
import { SearchService } from '@marci/search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private service: SearchService){

  }

  @Input() testString: string;

  save(testString) {
    this.service.changeMessage(testString);
  }

}
