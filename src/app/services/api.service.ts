import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Details, Jobs} from '../models/jobs-model'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient)
  {
    
  }
  getJobs():Observable<Jobs[]>
  {
    return this.http.get<Jobs[]>('/jobs')
  }
  getJobsDetails(id:number):Observable<Details>
  {
    return this.http.get<Details>(`/jobs/${id}`)
  }
}
