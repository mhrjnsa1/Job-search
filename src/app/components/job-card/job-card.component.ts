import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jobs } from '../../models/jobs-model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input()
  job!: Jobs;
  @Input() favorite!:boolean;
  @Output() selectFavorites= new EventEmitter();
  constructor(){}
  addToFavorites(id:number):void
  {
    this.selectFavorites.emit(id)
  }
}
