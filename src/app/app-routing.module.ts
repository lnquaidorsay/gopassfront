import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { IdentiteComponent } from './components/identite/identite.component';
import { VoyagenatComponent } from './components/voyagenat/voyagenat.component';
import { VoyageinternatComponent } from './components/voyageinternat/voyageinternat.component';
import { ContactComponent } from './components/contact/contact.component';
import { TemoinComponent } from './components/temoin/temoin.component';
import { CompteComponent } from './components/compte/compte.component';

// const routes: Routes = [
//   { path: 'accueil', component: WelcomeComponent,
//   children: [
//     { path: '', component: WelcomeComponent },
//     { path: 'apropos', component:  IdentiteComponent },
//     { path: 'payer/nat', component: VoyagenatComponent },
//     { path: 'payer/int', component: VoyageinternatComponent },
//     { path: 'contact', component: ContactComponent },
//     { path: 'temoin', component: TemoinComponent },
//   ]
// },
// { path: '',
//   redirectTo: '/accueil',
//   pathMatch: 'full'
// },
// { path: '**', component: PagenotfoundComponent }
// ];

// const routes: Routes = [
//   { path: "", redirectTo: "/accueil", pathMatch: "full"},
//   { path: "accueil", children: [
//      { path:"", component: WelcomeComponent },// http://localhost:4200/accueil
//      { path:"apropos", component: IdentiteComponent}, // http://localhost:4200/accueil/apropos
//      { path:"payer/nat", component: VoyagenatComponent }, // // http://localhost:4200/accueil/payer/nat
//      { path:"payer/int", component: VoyageinternatComponent },
//     ]

//   },
//   { path: 'contact', component: ContactComponent },
//   { path: 'temoin', component: TemoinComponent },
//   { path: "**", component: PagenotfoundComponent}

// ];

const routes: Routes = [
  { 
    path: 'accueil', 
    component: WelcomeComponent 
  },
  { 
    path: 'saisiepaiement', 
    component: IdentiteComponent 
  },
  { 
    path: 'payer/nat',
    component: VoyagenatComponent 
  },
  { 
    path: 'payer/int',
    component: VoyageinternatComponent 
  },
  { 
    path: 'compte',
    component: CompteComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: 'temoin', 
    component: TemoinComponent 
  },
  { 
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
