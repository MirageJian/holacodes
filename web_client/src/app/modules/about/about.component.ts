import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {JsonHelper} from "@shared/tools";
import {AboutService} from "./about.service";
import {AboutModel} from "@shared/models/about.model";
import {slideFromBottom} from "@shared/animations";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideFromBottom()]
})
export class AboutComponent implements OnInit, AfterViewInit {
  article: AboutModel;

  constructor(
    private generalService: AboutService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res: {data: AboutModel}) => {
      this.article = res.data;
    });
  }
  ngAfterViewInit(): void {

  }

}
