import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { Album } from '../models/album';
import { AlbumService } from '../services/album';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading: boolean = true; 

 constructor(
  private router: Router,
  private albumService: AlbumService,
  private cdr: ChangeDetectorRef
) {}

 ngOnInit(): void {
  this.isLoading = true;
  this.albumService.getAlbums().subscribe({
    next: (data) => {
      this.albums = data;
      this.isLoading = false; 
    },
    error: (err) => {
      console.error(err);
      this.isLoading = false; 
    }
  });
}

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.isLoading = false;
    });
  }

  goToDetail(id: number): void {
  this.router.navigate(['/albums', id]);
}
deleteAlbum(id: number, event: Event): void {
  event.stopPropagation();

  this.albums = this.albums.filter(album => album.id !== id);

  this.albumService.deleteAlbum(id).subscribe({
    next: () => {
      console.log(`Альбом ${id} удален`);
    },
    error: (err) => {
      console.error('Ошибка удаления:', err);
      alert('Не удалось удалить альбом');
    }
  });
}
}