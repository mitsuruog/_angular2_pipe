import {Component, OnInit} from 'angular2/core';
import {Logger} from './common/services/logger.service';
import {InitCapsPipe} from './pipes/init-caps.pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],
  providers: [Logger],
  pipes: [InitCapsPipe]
})

export class AppComponent {
  
  name: string

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}