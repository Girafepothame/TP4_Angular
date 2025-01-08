import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestServiceService } from '../test-service.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  param  = null
  param2  = null
  test = "Bonjour"
  constructor(private monActRoute: ActivatedRoute, 
    public monService: TestServiceService){
    this.test = monService.getInfo()
    if (monActRoute.snapshot.params['toto']){
    this.param = monActRoute.snapshot.params['toto']
    }
   if (monActRoute.snapshot.params['titi']){
    this.param2 = monActRoute.snapshot.params['titi']
    }
}



}
