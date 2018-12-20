// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * camPaignList Component
 */
@Component({
    selector: 'app-cam-paign-list',
    templateUrl : './cam-paign-list.component.html',
    styleUrls: ['./cam-paign-list.component.css']
})
export class CamPaignListComponent {

    constructor(
        private location: Location
        ) {

    }
}
