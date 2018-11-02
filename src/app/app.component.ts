import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private visibleWood: number[] = [1, 2, 3];

  title = 'Bull Dog Barn Wood';

  IsHidden(num) {
    return !this.visibleWood.includes(num);
  }

  leftWood() {
    var first = this.visibleWood[0];
    if (first === 1) {
      return;
    }

    first--;
    var second = first + 1;
    var last = first + 2;

    this.visibleWood = [first, second, last];
  }

  rightWood() {
    var last = this.visibleWood[this.visibleWood.length - 1];
    if (last === 4) {
      return;
    }

    last++;
    var second = last - 1;
    var first = last - 2;
    this.visibleWood = [first, second, last];
  }
}
