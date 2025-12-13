import { Component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { PostListComponent } from "@/app/features/post-list/post-list.component";
import { PostListSkeletonComponent } from "@/app/features/post-list/post-list-skeleton.component";
import { PostService } from "@/app/entities/post/api/post.service";
import { ThemeToggleComponent } from "@/app/shared/components/theme-toggle/theme-toggle.component";

@Component({
	selector: "app-home-page",
	standalone: true,
	imports: [
		AsyncPipe,
		PostListComponent,
		ThemeToggleComponent,
		PostListSkeletonComponent,
	],
	templateUrl: "./home.page.html",
})
export class HomePage {
	private readonly postService = inject(PostService);
	protected readonly posts$ = this.postService.getPosts();
}
