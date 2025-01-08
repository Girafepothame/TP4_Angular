import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations : [ trigger('toto' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.9s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateX(-75%)', offset: 0, backgroundColor: "lightblue",}), 
    style({opacity: .5, transform: 'translateY(35px)', offset: .3,  backgroundColor: "red",}),
    style({opacity: 1, transform: 'translateX(0)', offset: 1,  backgroundColor: "airsuperiorityblue",}), ]))]),{optional: true})
    ]) ])]
})
export class HomeComponent {
  
  nbItems: number = 4;
  btnText: String = "";
  test = "coucou";
  
  constructor(private toto: Router, public monTestService: TestServiceService){
    this.test = monTestService.getInfo()
  }
  ngOnInit(){
    this.nbItems = 0;
  }

  ajoutItem(){
    this.monTestService.objectifs.push(this.btnText);
    this.nbItems = this.monTestService.objectifs.length;
    setTimeout(()=> {this.toto.navigate(['about'])}, 3000);

  }

  consultAct(anIndex: number){
    this.toto.navigate(['consult/'+anIndex])

  }
  getExplicitClass(){
    if (this.btnText == "..."|| this.btnText == "")
    {
      return 'btn'
    }else{
      return 'btnok'
    }
  }
  getTaille(){
    return this.monTestService.objectifs.length
  }
}
