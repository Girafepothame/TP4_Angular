import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consult-activitie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consult-activitie.component.html',
  styleUrl: './consult-activitie.component.scss'
})
export class ConsultActivitieComponent {
  numAct = 0
  description : String = ""
  isEditing: Boolean = false
  title: String = ""

  constructor(private actRoute: ActivatedRoute,
    private monService: TestServiceService,
    private monRouter: Router) {
      this.numAct = actRoute.snapshot.params['numAct']
      this.description = monService.objectifs[this.numAct]
  }

  edit() {
    this.isEditing =  true
  }

  save() {
    this.isEditing = false
  }

  delete() {
    this.monService.removeItem(this.numAct)
    this.monRouter.navigate(['accueil'])
  }

  back() {
    this.monRouter.navigate(['accueil'])
  }
}
