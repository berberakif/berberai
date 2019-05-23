import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CvItemService } from './cv-item/cv-item.service';

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  generalData;

  public constructor(
    private cvItemService: CvItemService,
    private titleService: Title,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'basketball',
      'basketball.svg'
    );
    this.matIconRegistry.addSvgIcon(
      "basketball",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/material-icons/basketball.svg")
    );
    this.getItems();
    this.setTitle(this.generalData.name + ' | ' + this.generalData.position);

    router.events
      // .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        window.scrollTo(0, 0);
      });
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
