import { Component, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { JsonPlaceholderService } from "@shared/services/json-placeholder.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, AsyncPipe],
	templateUrl: "./app.html",
})
export class App {
	protected readonly title = signal("training");
	private readonly jsonPlaceholderService = inject(JsonPlaceholderService);
	protected readonly posts$ = this.jsonPlaceholderService.getPosts();
}
