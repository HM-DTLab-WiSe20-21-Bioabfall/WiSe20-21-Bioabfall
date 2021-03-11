import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bio10';

/*   isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(
    private router: Router,
    private authService: AuthenticationService) {

}

ngOnInit() {

this.isLoggedIn$ = this.authService.isLoggedIn; // {2}

  this.isLoggedIn$.subscribe(x => {
    if (x) {
        console.log('user is logged in - show home page');
        this.router.navigate(['/login']);
        } else {
          console.log('no user is logged in - show landing page');
          this.router.navigate(['/login']);
        }
    });

  } */


}
