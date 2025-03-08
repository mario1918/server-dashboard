import { Component, DestroyRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;

  constructor(private destroyRef: DestroyRef) {
    
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      this.currentStatus = rnd < 0.5 ? 'online' : rnd < 0.9 ? 'offline' : 'unknown';
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy() {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }

}
