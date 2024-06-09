import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sashinao6';
  data:any
  constructor (private dataservice:NewServiceService) {}
ngOnInit():void {
this.dataservice.fetch().subscribe((resp)=>{
  this.data=resp
  console.log(this.data)
})
}
}
