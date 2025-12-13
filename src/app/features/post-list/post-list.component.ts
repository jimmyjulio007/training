import { Component, input } from "@angular/core";
import { Post } from "../../entities/post/model/post.model";
import { PostCardComponent } from "src/app/entities/post/ui/post-card/post-card.component";

@Component({
	selector: "app-post-list",
	standalone: true,
	imports: [PostCardComponent],
	templateUrl: "./post-list.component.html",
})
export class PostListComponent {
	posts = input.required<Post[]>();
}
