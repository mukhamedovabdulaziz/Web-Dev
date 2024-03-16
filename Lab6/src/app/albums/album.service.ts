import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from '../models';
@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private client: HttpClient) {}

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getAlbum(id: number): Observable<Albums> {
    return this.client.get<Albums>(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }

  getPhotos(id: number): Observable<Albums> {
    return this.client.get<Albums>(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }
}
