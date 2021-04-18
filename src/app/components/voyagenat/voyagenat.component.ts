import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-voyagenat',
  templateUrl: './voyagenat.component.html',
  styleUrls: ['./voyagenat.component.css']
})
export class VoyagenatComponent implements OnInit {

  identiteFormGroup: FormGroup;
  adresseFormGroup: FormGroup;
  voyageFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.identiteFormGroup = this._formBuilder.group({
      typeIdentite: ['', Validators.required],
      dateDelivIdentite: ['', Validators.required],
      numIdentite: ['', Validators.required],
      organeDelivIdentite: ['', Validators.required],
      photoIdentite: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      postnom: ['', Validators.required]
    });
    this.voyageFormGroup = this._formBuilder.group({
      typevol: ['', Validators.required],
      compagnie: ['', Validators.required],
      numvol: ['', Validators.required],
      datevol: ['', Validators.required],
      heurevol: ['', ],
      paysdest: ['', Validators.required],
      villedest: ['', Validators.required],
      paystrans: ['', Validators.required],
      villetrans: ['', Validators.required]
    });
    this.adresseFormGroup = this._formBuilder.group({
      lieunaiss: ['', Validators.required],
      datenaiss: ['', Validators.required],
      adresse: ['', Validators.required],
      commune: ['', Validators.required],
      ville: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required]
      
    });
  }

  form1(){
    console.log(this.identiteFormGroup.value);
  }

  form2(){
    console.log(this.adresseFormGroup.value);
  }

}
