import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  // @Input() toggleSidebar: () => void = () => {};
  @Input() isCollapsed: boolean = false;
  collapsed = true;

  toggleSidebar() {
    this.event.emit(!this.isCollapsed);
  }
}
