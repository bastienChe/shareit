import { Injectable } from '@angular/core';
import { Picture } from '../models/pic.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PicItemService {

  pictureItems: Picture[] = [];

  PicItemSubject = new Subject<Picture[]>();

  constructor() { }

  emitPicture() {
    this.PicItemSubject.next(this.pictureItems);
  }

  savePicture () {

  }

  deletePicture(id: number) {

  }

  viewPicture() {

    const firstPic = new Picture('test', 'Content');
    const secondPic = new Picture('test2', 'Content2');
    const thirdPic = new Picture('test3', 'Content3');
    const fourthPic = new Picture('test4', 'Content4');
    const fifthPic = new Picture('test5', 'Content5');

    this.pictureItems.push(firstPic);
    this.pictureItems.push(secondPic);
    this.pictureItems.push(thirdPic);
    this.pictureItems.push(fourthPic);
    this.pictureItems.push(fifthPic);
    this.emitPicture();
  }

  viewSinglePicture (id: number) {

  }
}
