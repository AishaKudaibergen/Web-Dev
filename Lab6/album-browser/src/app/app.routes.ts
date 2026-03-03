import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About} from './about/about';
import { AlbumsComponent } from './albums/albums';
import { AlbumDetail } from './album-detail/album-detail';
import { AlbumPhotos} from './album-photos/album-photos';

export const routes: Routes = [

  { path: 'home', component: Home },
  
  { path: 'about', component: About },

  { path: 'albums', component: AlbumsComponent },
  
  { path: 'albums/:id', component: AlbumDetail},
 
  { path: 'albums/:id/photos', component: AlbumPhotos },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: '/home' }
];