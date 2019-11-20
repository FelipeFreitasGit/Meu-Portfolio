import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  arrow: boolean;

  constructor(
    private router: Router,
    private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.currentArrow.subscribe(action => this.arrow = action);
  }

  arrowTrue() {
    this.router.navigate(['/sobre']);
    this.homeService.actionArrow(true);
  }

  arrowFalse() {
    this.router.navigate(['/']);
    this.homeService.actionArrow(false);
  }

}
