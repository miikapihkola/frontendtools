import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaService } from '../services/cinema.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {

  data$: Observable<any>;

  constructor(private cinemaService: CinemaService) {
    this.data$ = new Observable<any>();
  }

  ngOnInit(): void {
    this.data$ = this.cinemaService.getData();
    //console.log(this.data$)
  }
}
