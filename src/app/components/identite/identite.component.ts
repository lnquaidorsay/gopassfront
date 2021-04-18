import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identite',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.css']
})
export class IdentiteComponent implements OnInit {

  identiteFormGroup: FormGroup;
  AdresseFormGroup: FormGroup;
  voyageFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.identiteFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      lieu: ['', Validators.required],
      aute: ['', Validators.required],
      numb: ['', Validators.required],
      prc: ['', Validators.required],
      titre: ['', Validators.required],
      typeIdentite: ['', Validators.required],
      dateDelivIdentite: ['', Validators.required],
      numIdentite: ['', Validators.required],
      photoIdentite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      postnom: ['', Validators.required],
      lieunaiss: ['', Validators.required],
      datenaiss: ['', Validators.required],
      adresse: ['', Validators.required],
      commune: ['', Validators.required],
      ville: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required]

    });
    this.voyageFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      lieu2: ['', Validators.required],
      aute2: ['', Validators.required],
      numb2: ['', Validators.required],
      prc2: ['', Validators.required],
      titre2: ['', Validators.required]
    });
    this.AdresseFormGroup = this._formBuilder.group({
      lieu1: ['', Validators.required],
      aute1: ['', Validators.required],
      numb1: ['', Validators.required],
      prc1: ['', Validators.required],
      titre1: ['', Validators.required],
      type: ['', Validators.required],
      compagnie: ['', Validators.required],
      numero: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      paysdest: ['', Validators.required],
      villedest: ['', Validators.required],
      paystrans: ['', Validators.required],
      villetrans: ['', Validators.required]
    });
  }

  form1(){
    console.log(this.identiteFormGroup.value);
  }

  form2(){
    console.log(this.AdresseFormGroup.value);
  }

}
