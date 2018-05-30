import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutes,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
