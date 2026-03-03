import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- ДОБАВЬ ChangeDetectorRef СЮДА
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../models/album';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail implements OnInit {
  // Добавь ! вот сюда. Это "заткнет" ошибку TS2532
  album!: Album; 
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef // для принудительного обновления
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.albumService.getAlbum(id).subscribe({
        next: (data) => {
          this.album = data;
          this.isLoading = false; 
          this.cdr.detectChanges();
        },
        error: () => { this.isLoading = false; }
      });
    }
  }

  saveTitle() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe((updatedAlbum) => {
        alert('Title updated successfully!');
        console.log('Server response:', updatedAlbum);
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}