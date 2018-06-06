import { Component, OnInit } from '@angular/core';
import { Picture } from '../../../models/picture.model';
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

    this.pictureSubscription = this.picService.PicItemSubject.subscribe(
      (pictures: Picture[]) => {
        this.pictures = pictures;
      }
    );
    this.picService.viewPicture();
    this.picService.emitPicture();

  }


}
