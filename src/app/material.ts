import { NgModule } from '../../node_modules/@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule
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
      MatInputModule,
      MatListModule,
      MatCardModule,
      MatTooltipModule,
      MatDialogModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatListModule,
      MatCardModule,
      MatTooltipModule,
      MatDialogModule
    ],
})

export class MaterialModule { }
