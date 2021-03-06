import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { LocalizationService } from '../l10n/l10n.service';
import { CvItemService } from '../cv-item/cv-item.service';
import { PictureModalComponent } from '../picture-modal/picture-modal.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  l10n;
  generalData;
  interests;

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
    private dialog: MatDialog,
  ) { }

  getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  showAvatar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      imagePath: 'assets/img/avatar.jpg',
      title: this.generalData.name,
    };
    this.dialog.open(PictureModalComponent, dialogConfig);
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interests = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
