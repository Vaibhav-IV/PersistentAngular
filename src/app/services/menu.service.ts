import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      {
        name: 'home', path: './home', children: [
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
          { name: 'meetings', path: './meetings' },
        ]
      }
    ];
    return menu;
  }

}

