import { Component, EventEmitter, Output, Input } from '@angular/core';
import { StarRatingService } from 'src/app/Services/StarRatingSvc/star-rating.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() bookingId: string ="";
  @Input() userId: string="";
  @Input() packageId: number=0;
  @Output() ratingSelected: EventEmitter<{ bookingId: string, userId: string, packageId: number, rating: number }> = new EventEmitter<{bookingId: string, userId: string, packageId: number, rating: number }>();
  constructor(private srvc: StarRatingService) {}
  gotrating=0;
  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];
  ngOnInit(){
    this.srvc.getRating(this.bookingId).subscribe((data: any) => {
      console.log(data);
      this.gotrating=data.UserRating;
      if(data != null)
      {
        this.selectStar(data.userRating);
      }
    });
  }
  giveRating(val : number)
  {
    console.log("selected star ",val)
    this.srvc.postRating(this.bookingId, this.userId, this.packageId, val).subscribe((data: any) => {
      console.log(data);
      this.gotrating=data.rating;
      if(data != null)
      {
        this.selectStar(val);
      }
    });
  }
  selectStar(value: number): void 
  {
    if (this.selectedRating === 0) 
    {
      this.selectedRating = value;
      this.ratingSelected.emit({ bookingId: this.bookingId, userId: this.userId, packageId: this.packageId, rating: this.selectedRating }); 
      this.stars.forEach((star) => {
        star.class = star.id <= this.selectedRating ? 'star-gold star star-hover' : 'star-gray star star-hover';
      });
    }
  }
}