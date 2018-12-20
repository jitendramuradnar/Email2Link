// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * sendGrid Component
 */
@Component({
    selector: 'app-send-grid',
    templateUrl : './send-grid.component.html',
    styleUrls: ['./send-grid.component.css']
})
export class SendGridComponent {

    constructor(
        private location: Location
        ) {

    }
}
