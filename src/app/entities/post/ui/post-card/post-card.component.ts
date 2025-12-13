import { Component, input } from "@angular/core";
import { Post } from "../../model/post.model";
import { RouterLink } from "@angular/router";
import { ZardCardComponent } from "@shared/components/card/card.component";
import { ZardButtonComponent } from "@shared/components/button/button.component";
import { ZardIconComponent } from "@shared/components/icon/icon.component";

@Component({
	selector: "app-post-card",
	standalone: true,
	imports: [
		ZardCardComponent,
		ZardButtonComponent,
		ZardIconComponent,
		RouterLink,
	],
	templateUrl: "./post-card.component.html",
})
export class PostCardComponent {
	post = input.required<Post>();
}
