import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input() isCollapsed: boolean = false;
  toggleSidebar() {
    this.event.emit(!this.isCollapsed);
  }
}
