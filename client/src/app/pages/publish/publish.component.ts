// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * publish Component
 */
@Component({
    selector: 'app-publish',
    templateUrl : './publish.component.html',
    styleUrls: ['./publish.component.css']
})
export class PublishComponent {

    constructor(
        private location: Location
        ) {

    }
}
