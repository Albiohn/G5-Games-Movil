import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: any[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.apiService.getVideos(this.currentPage).subscribe(
      (data: any) => {
        this.videos = data.results || []; // Asegúrate de manejar el caso cuando no hay resultados
        this.totalPages = Math.ceil(data.number_of_total_results / data.limit);
      },
      (error) => {
        console.error('Error fetching videos:', error);
      }
    );
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadVideos();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadVideos();
    }
  }
}
