import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formregister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formregister.component.html',
  styleUrl: './formregister.component.css'
})
export class FormregisterComponent {
  title = 'formtest';
MyForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),

});

muSuperfunctionSubmit() {
  console.log(this.MyForm.value);
  console.warn(this.MyForm.value);
}
}
