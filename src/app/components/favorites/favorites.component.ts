import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Jobs } from '../../models/jobs-model';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule,JobCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
favorites:Jobs[]=[];
showFavoritesIcon:boolean=false;
constructor(private jobService:JobsService)
{

}
ngOnInit(): void {   
  this.favorites=this.jobService.getFavorites();
}
}
