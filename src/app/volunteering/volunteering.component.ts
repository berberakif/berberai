import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItem } from '../cv-item/cv-item';
import { CvItemService } from '../cv-item/cv-item.service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit {
  l10n;
  volunteerItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  getItems(): void {
    this.cvItemService
      .getVolunteerItems()
      .then(items => this.volunteerItems = items);
  }


  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
