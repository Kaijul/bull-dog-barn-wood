import { Component, OnInit } from '@angular/core';
import { ImageBrowser } from '../image-browser.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.sass']
})
export class FurnitureComponent implements OnInit {

  private visibleFurniture: number[] = [1];

  constructor(private imageBrowser: ImageBrowser) { }

  ngOnInit() {
  }

  IsHidden(arr, num) {
    return this.imageBrowser.IsHidden(arr, num);
  }

  HasPicturesLeft(arr) {
    return this.imageBrowser.HasPicturesLeft(arr);
  }

  HasPicturesRight(arr, num) {
    return this.imageBrowser.HasPicturesRight(arr, num);
  }

  right(arr) {
    return this.imageBrowser.right(arr);
  }

  left(arr) {
    return this.imageBrowser.left(arr);
  }
}
