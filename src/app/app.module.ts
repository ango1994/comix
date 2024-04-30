import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './features/comics/pages/home/home.component';
import { ListsComponent } from './features/comics/pages/lists/lists.component';
import { MembersComponent } from './features/members/pages/members/members.component';
import { ComicsComponent } from './features/comics/pages/comics/comics.component';

import { MembersRoutingModule } from './features/members/members.routing.module';
import { ComicComponent } from './features/comics/pages/comic/comic.component';
import { ComicsRoutingModule } from './features/comics/pages/comics.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListsComponent,
    MembersComponent,
    ComicsComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComicsRoutingModule,
    MembersRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
