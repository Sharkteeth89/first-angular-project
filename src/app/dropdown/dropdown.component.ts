import { Component} from '@angular/core';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

roles: Role[] = [
    {value: 'normal-0', viewValue: 'Normal'},
    {value: 'seller-1', viewValue: 'Seller'},
  ];
}