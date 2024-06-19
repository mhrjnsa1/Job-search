import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Details } from '../../models/jobs-model';
import { CommonModule } from '@angular/common';
import { SafehtmlPipe } from '../../pipe/safehtml.pipe';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink,CommonModule,SafehtmlPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit,OnDestroy{
details!:Details;
detailsError:string="";
private unsubscribe$ = new Subject<void>();

constructor(private apiSerive:ApiService,private route:ActivatedRoute){}
ngOnInit(): void {
  const getJobId=this.route.snapshot.params['id']
  this.apiSerive.getJobsDetails(getJobId).pipe(takeUntil(this.unsubscribe$)).subscribe({
    next:(res:Details) => {
      this.details=res;
     },
    error:(error) =>{
      this.detailsError="Job description  not available"
    }
  })
}
ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
}
