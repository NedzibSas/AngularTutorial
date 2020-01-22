import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { TutoComponent } from './tuto/tuto.component';

import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './tuto/new/new.component';
import { NewcComponent } from './tuto/newc/newc.component';
import { NgforComponent } from './tuto/ngfor/ngfor.component';
import { NgifComponent } from './tuto/ngif/ngif.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tuto', component: TutoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tuto/new', component: NewComponent },
  { path: 'tuto/newc', component: NewcComponent },
  { path: 'tuto/ngfor', component: NgforComponent },
  { path: 'tuto/ngif', component: NgifComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [NewcComponent, NgforComponent, NgifComponent],
})
export class AppRoutingModule {}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    TutoComponent,
    NewComponent,
    NewcComponent,
    NgforComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
