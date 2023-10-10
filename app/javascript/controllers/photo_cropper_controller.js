import { Controller } from "@hotwired/stimulus"
import Cropper from 'cropperjs';

// Connects to data-controller="photo-cropper"
export default class extends Controller {
  connect() {
    console.log('Hello world from photo cropper controller');
    console.log('Cropper: ', Cropper);
  }
}
