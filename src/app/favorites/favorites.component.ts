import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() favorite: string;
  @Input() reviews: Number;
  @Output() favoriteClicked: EventEmitter<String> = new EventEmitter<String>();
  fave = false;

  onClick(): void {
    this.favoriteClicked.emit(`This favorite ${this.favorite} was saved`);
    this.fave = !this.fave;
  }

  isSelected(fave: boolean) {
    return fave || this.fave;
  }
}

