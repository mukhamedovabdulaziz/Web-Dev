import { Component, OnInit, OnDestroy } from '@angular/core';
import { Albums } from '../models';
import { AlbumsService } from './album.service';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums!: Albums[];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  ngOnDestroy() {}
}
