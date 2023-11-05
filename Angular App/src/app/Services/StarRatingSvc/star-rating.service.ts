import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarRatingService {

  constructor(private http: HttpClient) { }
  getRating(bookingId: string) {
    return this.http.get(`http://localhost:5239/getrating?bookingId=${bookingId}`);
  }

  postRating(bookingId: string, userId: string, packageId: number, rating: number) {
    const data = {
      bookingId: bookingId,
      userId: userId,
      packageId: packageId,
      UserRating: rating
    };
    console.log(data);
    return this.http.post('http://localhost:5239/PostRating', data);
  }
  
  getaverageRating(packageId: number) {
    return this.http.get(`http://localhost:5239/average?packageId=${packageId}`);
  }
}
