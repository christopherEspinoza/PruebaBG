import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  token:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2UyMTJkZGVjMTI3YzI2NTRkZGFhZjFmM2NhMTE4NCIsInN1YiI6IjYwMDgzZjU2MTc2YTk0MDA1MTBhYTExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8KfCJBLpjz_HLFoH8xwVQYhyUggaoMZSGyaqKyU8QV4'
  
  constructor(private http: HttpClient) { }

  getMovies(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${this.token}`);

    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
  }

  getMovie(){
    
  }
}
