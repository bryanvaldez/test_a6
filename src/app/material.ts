import { NgModule } from '../../node_modules/@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule
    ],
})

export class MaterialModule { }
