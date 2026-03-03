import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Импортируем клиент для запросов
import { Observable } from 'rxjs'; // Для работы с потоками данных
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private cachedAlbums: Album[] = []; // Локальное хранилище для изменений

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return new Observable(observer => {
      // Если у нас уже есть загруженные и измененные альбомы, отдаем их
      if (this.cachedAlbums.length > 0) {
        observer.next(this.cachedAlbums);
        observer.complete();
      } else {
        this.http.get<Album[]>(`${this.baseUrl}/albums`).subscribe(data => {
          this.cachedAlbums = data;
          observer.next(this.cachedAlbums);
          observer.complete();
        });
      }
    });
  }

  getAlbum(id: number): Observable<Album> {
    // Ищем сначала в кэше, чтобы изменения были видны
    const cached = this.cachedAlbums.find(a => a.id === id);
    if (cached) {
      return new Observable(obs => { obs.next(cached); obs.complete(); });
    }
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {

    const index = this.cachedAlbums.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.cachedAlbums[index] = { ...album };
    }
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }
  
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
  
  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }
}