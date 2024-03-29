import { Controller } from "@hotwired/stimulus"
import Cropper from 'cropperjs';

// Connects to data-controller="photo-cropper"
export default class extends Controller {
  connect() {
    const image = this.element;
    const cropper = new Cropper(image, {
      aspectRatio: 1 / 1,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
    console.log('cropper: ', cropper);
  }
}
