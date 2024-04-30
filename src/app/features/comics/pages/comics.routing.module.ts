import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:comic', component: ComicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
