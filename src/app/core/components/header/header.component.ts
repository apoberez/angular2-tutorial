import {Component, trigger, state, style, transition, animate, OnInit} from '@angular/core'

@Component({
    selector: 'pc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations: [
        trigger('dropState', [
            state('inactive', style({
                transform: 'translate(0, -120%)'
            })),
            state('active', style({
                transform: 'translate(0, 0)'
            })),
            transition('inactive <=> active', animate('300ms ease-in'))
        ])
    ]
})
export class HeaderComponent implements OnInit {

    dropState: String;

    ngOnInit(): void {
        this.dropState = 'inactive';
    }

    onClickMenuItem(): void {
        if (this.dropState == 'inactive') {
            this.dropState = 'active';
        } else {
            this.dropState = 'inactive';
        }
        console.log(this.dropState);
    }
}
