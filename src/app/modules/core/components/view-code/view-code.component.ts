import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.scss']
})
export class ViewCodeComponent implements OnInit {

  constructor(private dialogService: DialogService) { 
    console.log(this.dialogService.getData());
  }

  ngOnInit(): void {
  }

}
