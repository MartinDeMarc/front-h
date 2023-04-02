import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  description: string = '';
  formFile: string = '';

  session = '';

  ngOnInit(): void {}

  async signOut() {}
  onSubmit() {
    console.log(this.description, this.formFile);
  }

  async handleAuth() {}
}
