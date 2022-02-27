import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-help-banner',
  templateUrl: './help-banner.component.html',
  styleUrls: ['./help-banner.component.scss']
})
export class HelpBannerComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogService.close(undefined)
  }

}
