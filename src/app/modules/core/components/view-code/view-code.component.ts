import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.scss']
})
export class ViewCodeComponent implements OnInit {

  private codeOutput: any;
  constructor(private dialogService: DialogService) { 
    this.codeOutput = this.dialogService.getData();
  }

  ngOnInit(): void {
  }

  getHTMLCode() {
    return this.codeOutput.htmlCode;
  }

  getCSSCode() {
    return this.codeOutput.cssText;
  }

  copyHTML() {
    navigator.clipboard.writeText(this.getHTMLCode());
  }

  copyCSS() {
    navigator.clipboard.writeText(this.getCSSCode());
  }

}
