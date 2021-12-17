import { Component } from '@angular/core';

import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poser';

  ngOnInit() {
    // fromEvent(document, 'click')
    // .pipe(
    //   // restart counter on every click
    //   switchMap(() => interval(1000))
    // )
    // .subscribe(console.log);
  }
}
