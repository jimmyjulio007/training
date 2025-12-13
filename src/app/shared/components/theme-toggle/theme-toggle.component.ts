import { Component, inject } from "@angular/core";
import { ZardButtonComponent } from "@shared/components/button/button.component";
import { ZardIconComponent } from "@shared/components/icon/icon.component";
import { ZardDarkMode } from "@shared/services/dark-mode.service";
import { ZardDropdownModule } from "@shared/components/dropdown/dropdown.module";

@Component({
	selector: "app-theme-toggle",
	standalone: true,
	imports: [ZardButtonComponent, ZardIconComponent, ZardDropdownModule],
	template: `
    <button z-button zType="ghost" [zDropdown]="themeMenu" class="rounded-full">
      <i z-icon zType="sun" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></i>
      <i z-icon zType="moon" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></i>
      <span class="sr-only">Toggle theme</span>
    </button>

    <z-dropdown-menu-content #themeMenu>
      <div z-dropdown-menu-item (click)="darkMode.disable()">
        <i z-icon zType="sun" class="mr-2 h-4 w-4"></i>
        <span>Light</span>
      </div>
      <div z-dropdown-menu-item (click)="darkMode.enable()">
         <i z-icon zType="moon" class="mr-2 h-4 w-4"></i>
        <span>Dark</span>
      </div>
    </z-dropdown-menu-content>
  `,
})
export class ThemeToggleComponent {
	protected readonly darkMode = inject(ZardDarkMode);
}
