import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Details } from '../../models/jobs-model';
import { CommonModule } from '@angular/common';
import { SafehtmlPipe } from '../../pipe/safehtml.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink,CommonModule,SafehtmlPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
details!:Details;
detailsError:string=""
constructor(private apiSerive:ApiService,private route:ActivatedRoute){}
ngOnInit(): void {
  const getJobId=this.route.snapshot.params['id']
  this.apiSerive.getJobsDetails(getJobId).subscribe({
    next:(res:Details) => {
      this.details=res;
     },
    error:(error) =>{
      this.detailsError="Job description  not available"
    }
  })
}
}
