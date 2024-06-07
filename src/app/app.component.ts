import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomComponentsModule } from './custom-components/custom-components.module';
import {MatListModule} from '@angular/material/list';
import { MovieService } from './movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, 
    CustomComponentsModule, 
    MatListModule, 
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaBG';

  movies:any[]=[];

  constructor(
    // private _service: MovieService
  ){

  }

  ngOnInit(): void {
    // this._service.getMovies().subscribe({
    //   next(value) {
    //     console.log(value)
    //   },
    //   error(err) {
    //     console.log(err)
    //   },
    // });
  }
}
