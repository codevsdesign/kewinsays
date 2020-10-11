import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChrisIsAwesomeComponentComponent } from './chris-is-awesome-component/chris-is-awesome-component.component';

@NgModule({
  declarations: [	
    AppComponent,
      ChrisIsAwesomeComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
