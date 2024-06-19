import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Jobs } from '../../models/jobs-model';
import { JobCardComponent } from '../job-card/job-card.component';
import { ApiService } from '../../services/api.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule,JobCardComponent,RouterOutlet],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs:Jobs[]=[];
  showFavoritesIcon:boolean=true;
  errorMessage:string | null=null;
  constructor(private apiService:ApiService,public jobSerivce:JobsService)
  {

  }
ngOnInit(): void {

  this.apiService.getJobs().subscribe({
    next:(res:Jobs[]) => {
      this.jobs=res;
      this.retainFavorites(this.jobs)
    },
    error:(err:string) =>{
      this.errorMessage="Oops someting went wrong, Please refresh the page again"
    }
  })  
}
retainFavorites(jobs:Jobs[])
{
  //get stored favorites from localstorage while refresh
  const getFavorites:Jobs[]=this.jobSerivce.getFavorites();
  getFavorites.forEach((item:Jobs) => {
    const getIndex=jobs.findIndex((job:Jobs) => job.id == item.id);
    jobs[getIndex].favorite=true;
  })
}
toggleFavorites(id:number)
{
  //toggle favorite while select and unselect
  this.jobs.forEach((list:Jobs) =>{ if(list.id == id){list.favorite= !list.favorite}})
  //update in localstorage
  this.jobSerivce.setFavorites(this.jobs.filter((x:Jobs) => x.favorite))
}
}
