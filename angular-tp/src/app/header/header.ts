import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  maintenant = signal(new Date());
  timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.maintenant.set(new Date());
    }, 1000);
  }
}
