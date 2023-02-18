import { Component } from '@angular/core';
import { faGithub, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-toggle-example';

  faGithub = faGithub;
  faMedium = faMedium;
  faTwitter = faTwitter;

  isNavbarCollapsed = true;
}

