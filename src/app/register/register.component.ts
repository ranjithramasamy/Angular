import { Component, Inject } 				from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } 	from '@angular/material';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onCancelClick(){
	  this.dialogRef.close();
  }
}