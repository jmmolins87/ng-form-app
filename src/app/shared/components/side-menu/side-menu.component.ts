import { Component } from '@angular/core';
import { MenuItem } from '../../interface/menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic' },
    { title: 'Dinámicos', route: '/reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' }
  ]

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth/' }
  ]

}
