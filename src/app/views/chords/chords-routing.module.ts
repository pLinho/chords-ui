import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordsComponent } from './chords.component';

const routes: Routes = [
  { path: '', component: ChordsComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChordsRoutingModule { }
