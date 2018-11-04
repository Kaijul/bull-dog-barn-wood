import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageBrowser {

  constructor() { }

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
