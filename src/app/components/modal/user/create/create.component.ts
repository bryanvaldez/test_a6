import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit{
  
  form: FormGroup;
  user = {
    'SApaterno': '', 
    'SAmaterno': '', 
    'SNombres': '',
    'SMail': '', 
    'SDireccion': '', 
    'STmovil': '',
  };

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      SApaterno:['', Validators.required],
      SAmaterno:['', Validators.required],
      SNombres:['', Validators.required],
      SMail:['', [Validators.required, Validators.email]],
      SDireccion:['', ],
      STmovil:['', ],
    });
  }  

  get f() { return this.form.controls; }

  onNoClick() {    
    this.dialogRef.close();
  }

  onSubmit(){
    this.dialogRef.close(this.form.value);
  }
  
}
