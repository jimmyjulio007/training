import { Injectable, signal, effect, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
	providedIn: "root",
})
export class ZardDarkMode {
	private platformId = inject(PLATFORM_ID);

	readonly isDark = signal<boolean>(false);

	constructor() {
		if (isPlatformBrowser(this.platformId)) {
			const saved = localStorage.getItem("dark-mode");
			const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
			this.isDark.set(saved !== null ? saved === "true" : system);
		}

		effect(() => {
			if (isPlatformBrowser(this.platformId)) {
				const root = window.document.documentElement;
				if (this.isDark()) {
					root.classList.add("dark");
				} else {
					root.classList.remove("dark");
				}
				localStorage.setItem("dark-mode", String(this.isDark()));
			}
		});
	}

	toggle() {
		this.isDark.update((v) => !v);
	}

	enable() {
		this.isDark.set(true);
	}

	disable() {
		this.isDark.set(false);
	}
}
