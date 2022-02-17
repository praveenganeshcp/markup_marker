import { Component, OnInit } from '@angular/core';
import { ContextMenuService } from 'src/app/modules/shared/services/context-menu/context-menu.service';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';
import { CodeOutputComponent } from '../../components/code-output/code-output.component';
import { WidgetMenuComponent } from '../../components/widget-menu/widget-menu.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  constructor(private contextMenuService: ContextMenuService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.dialogService.open(CodeOutputComponent, 40, 40);
    this.dialogService.afterClosed().subscribe(console.log)
  }

  onContextMenu(event) {
    event.preventDefault();
    console.log(event.target);
    this.contextMenuService.open(WidgetMenuComponent, event.clientX, event.clientY)
    this.contextMenuService.afterClosed().subscribe(console.log)
  }

}
