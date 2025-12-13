import { Component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { PostListComponent } from "@/app/features/post-list/post-list.component";
import { PostService } from "@/app/entities/post/api/post.service";

@Component({
	selector: "app-home-page",
	standalone: true,
	imports: [AsyncPipe, PostListComponent],
	templateUrl: "./home.page.html",
})
export class HomePage {
	private readonly postService = inject(PostService);
	protected readonly posts$ = this.postService.getPosts();
}
