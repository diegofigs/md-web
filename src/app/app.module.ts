import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { DocumentModule } from './document/document.module';
import { ServicesModule } from './services/services.module';

/**
 * Variable in charge of keeping a record of application paths.
 * Not used since very small project scope and functionality.
 * @type {({path: string; component: AppComponent} | {path: string; redirectTo: string; pathMatch: string})[]}
 */
const appRoutes: Routes = [
  { path: 'documents', component: AppComponent },
  { path: '',   redirectTo: '/documents', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    MatSidenavModule,
    DocumentModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
