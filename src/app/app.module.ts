import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './home/app.component';
import { WoodComponent } from './wood/wood.component';

import { ImageBrowser } from './image-browser.service';
import { FurnitureComponent } from './furniture/furniture.component';
import { TinComponent } from './tin/tin.component';

@NgModule({
  declarations: [
    AppComponent,
    WoodComponent,
    FurnitureComponent,
    TinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageBrowser],
  bootstrap: [AppComponent]
})
export class AppModule { }
