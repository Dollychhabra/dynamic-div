import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from './atoms/button/button.module';
import { Routes, RouterModule } from '@angular/router';
import { DynamicDivComponent } from './organisms/dynamic-div/dynamic-div.component';
import { DynamicDivModule } from './organisms/dynamic-div/dynamic-div.module';

const appRoutes: Routes = [{ path: '', component: DynamicDivComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ButtonModule,
    DynamicDivModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
