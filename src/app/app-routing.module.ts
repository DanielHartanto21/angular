import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsiComponent } from './listgame/isi/isi.component';
import { ListgameComponent } from './listgame/listgame.component';
import { ListComponent } from './wishlist/list/list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'wishlist',
    component: WishlistComponent,
    children: [{ path: '', component: ListComponent }],
  },
  {
    path: 'game',
    component: ListgameComponent,
    children: [{ path: '', component: IsiComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
