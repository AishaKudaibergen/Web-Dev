import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = Number(params['id']);
      
      if (this.albumId) {
        this.albumService.getPhotos(this.albumId).subscribe({
          next: (data: Photo[]) => {
            this.photos = data.map(p => ({
              ...p,

              thumbnailUrl: `https://picsum.photos/id/${p.id % 100}/150/150`
            }));

            console.log('Фото прилетели и обновлены:', this.photos.length);
            this.cdr.detectChanges(); 
          },
          error: (err) => {
            console.error('Ошибка:', err);
          }
        });
      }
    });
  }
}