import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChordsRoutingModule } from './chords-routing.module';
import { ChordsComponent } from './chords.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChordsComponent,
  ],
  imports: [
    CommonModule,
    ChordsRoutingModule,
    FormsModule,

  ]
})
export class ChordsModule { }
