import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/shared/header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isCollapsed = true;

  toggleSidebar(colapseNewState: boolean) {
    this.isCollapsed = colapseNewState;
  }
}
