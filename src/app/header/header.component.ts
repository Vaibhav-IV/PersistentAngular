import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  name: string | undefined;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = []; //this all for breadcrumbs

  constructor(private router: Router,
    private menuService: MenuService,
    private observer: BreakpointObserver,
    public loginAuth: AuthService) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this.router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {

        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {

          target = target.find((page: { path: string | any[]; }) => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,

            path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
          });


          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        // console.log(this.breadcrumbList);
      }
    });
  }
}
