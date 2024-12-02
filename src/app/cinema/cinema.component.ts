import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaService } from '../services/cinema.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { AppFilterPipe } from '../app-filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatInputModule, AppFilterPipe, MatFormFieldModule, FormsModule],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {

  data$: Observable<any>;
  searchTerm: string = "";

  constructor(private cinemaService: CinemaService) {
    this.data$ = new Observable<any>();
  }

  ngOnInit(): void {
    this.data$ = this.cinemaService.getData();
    //console.log(this.data$)
  }
}
