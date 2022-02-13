import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(public configService: ConfigService) { }

  ngOnInit(): void {
  }

}
