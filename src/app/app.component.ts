import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private visibleWood: number[] = [1];
  private visibleFurniture: number[] = [1];
  private visibleTin: number[] = [1];

  title = 'Bull Dog Barn Wood';

  IsHidden(arr, num) {
    return !arr.includes(num);
  }

  left(arr) {
    var first = arr[0];
    if (first === 1) {
      return;
    }

    first--;

    return [first];
  }

  right(arr) {
    var last = arr[arr.length - 1];
    if (last === 5) {
      return;
    }

    last++;
    return [last];
  }

  HasPicturesLeft(arr) {
    return arr[0] > 1;
  }

  HasPicturesRight(arr, count) {
    return arr[0] < count;
  }
}
