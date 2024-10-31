import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  // srcValue: string = 'assets/image/logo.png';
  public cont = 1;
  public sum(){
    return this.cont++;
  }
  public minus(){
    return this.cont--;
  }
  public name ="Rodrigo Watanabe"
}
