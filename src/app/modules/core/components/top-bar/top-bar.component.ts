import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { HelpBannerComponent } from '../help-banner/help-banner.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() generateCode = new EventEmitter();
  constructor(public configService: ConfigService, private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  generateOutput() {
    this.generateCode.emit();
  }

  openHelpBanner() {
    this.dialogService.open(HelpBannerComponent, 60, 60, {
        data: {},
        isClosable: true
    })
  }

}
