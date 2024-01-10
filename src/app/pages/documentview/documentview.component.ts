import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/shared/header/header.component';
@Component({
  selector: 'app-documentview',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, HeaderComponent],
  templateUrl: './documentview.component.html',
  styleUrl: './documentview.component.scss',
})
export class DocumentviewComponent {
  isCollapsed = true;
  toggleSidebar(colapseNewState: boolean) {
  this.isCollapsed = colapseNewState;
  }
}
