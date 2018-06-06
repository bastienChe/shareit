import { Component, OnInit } from '@angular/core';
import { Picture } from '../../../models/pic.model';
import { PicItemService } from '../../../services/pic-item.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.scss']
})
export class PicListComponent implements OnInit {

  pictures: Picture[];
  pictureSubscription: Subscription;

  constructor(private picService: PicItemService) {
  }

  ngOnInit() {
    /*
    debugger;
    picOne = new Picture('title', 'content');
    this.pictures.push(picOne);
    const picTwo = new Picture('title2', 'content2');
    this.pictures.push(picTwo);
    const picThree = new Picture('title3', 'content3');
    this.pictures.push(picThree);
    const picFour = new Picture('title4', 'content4');
    this.pictures.push(picFour);*/

    this.pictureSubscription = this.picService.PicItemSubject.subscribe(
      (pictures: Picture[]) => {
        this.pictures = pictures;
      }
    );
    this.picService.viewPicture();
    this.picService.emitPicture();

  }


}
