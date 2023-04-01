import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  description: string = '';
  formFile: string = '';

  onSubmit() {
    console.log('eeyeye', this.description, this.formFile);
  }
}
