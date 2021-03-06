import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {MOBILE_BREAKPOINT} from '@const/app-const';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() sidenav: MatSidenav;
  matches: boolean;
  @Input() isArticle = false;
  // @Output() changeRoute: EventEmitter<string> = new EventEmitter<string>();
  subscription: Subscription;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private location: Location
  ) {
  }

  ngOnInit() {
    // register the subscription of router
    this.subscription = this.breakpointObserver.observe(MOBILE_BREAKPOINT).subscribe(result => {
      this.matches = result.matches;
    });
  }

  goBack() {
    this.location.back();
  }

  // destroy the subscription and listener.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
