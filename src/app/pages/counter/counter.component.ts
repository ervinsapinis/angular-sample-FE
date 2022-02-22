import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent{

result = 1000;
add():void {
    this.result++;
}
subtract():void {
    this.result--;
}

}
