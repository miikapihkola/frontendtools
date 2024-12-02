import { Component } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {

  //private data$: Observable<any>;
  private data: any;

  constructor(private cinemaService: CinemaService) {
    this.data = this.cinemaService.getTestData();
  }
}
