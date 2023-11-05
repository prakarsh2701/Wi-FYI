import { Component, OnInit, Input} from '@angular/core';
import { StarRatingService } from '../../Services/StarRatingSvc/star-rating.service';

@Component({
  selector: 'app-avgrating',
  templateUrl: './avgrating.component.html',
  styleUrls: ['./avgrating.component.css']
})
export class AvgratingComponent implements OnInit {

  stars?: number[] ;
  rating: any;

  constructor(private srvc: StarRatingService) {}
  @Input() packageId: number=0;
  ngOnInit() {
    this.srvc.getaverageRating(this.packageId).subscribe((data: any) => {
      this.rating = this.rounding(data);
      this.stars = this.generateNaturalNumbers(this.rating);
    });
  }

  rounding(value: number): number {
    return Math.round(value * 2) / 2;
  }
  generateNaturalNumbers(n: number): number[] {
    if (n <= 0) {
      return [];
    }
    const naturalNumbers: number[] = [];
    for (let i = 1; i <= n; i++) {
      naturalNumbers.push(i);
    }
    return naturalNumbers;
  }
}