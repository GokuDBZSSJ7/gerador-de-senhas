import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  phrase: string = '';
  password: string = '';

  substitutionMap: { [key: string]: string } = {
    'a': '@',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '$',
    't': '7'
  };

  generatePassword() {
    let base = this.phrase;
    let password = '';

    for (let char of base) {
      let lowerChar = char.toLowerCase();
      if (this.substitutionMap[lowerChar]) {
        password += this.substitutionMap[lowerChar];
      } else {
        password += char;
      }
    }

    this.password = this.capitalizeFirstLetter(password);
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
