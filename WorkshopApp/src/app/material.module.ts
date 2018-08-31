import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatDialogModule, MatGridListModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule,
    MatCardModule, MatDialogModule, MatGridListModule, MatSelectModule],
  exports: [MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule,
    MatCardModule, MatDialogModule, MatGridListModule, MatSelectModule]
})

export class MaterialModule {
}
