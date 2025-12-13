import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, shareReplay } from "rxjs";
import { Post } from "@/app/entities/post/model/post.model";

@Injectable({
	providedIn: "root",
})
export class JsonPlaceholderService {
	private readonly http = inject(HttpClient);
	private readonly BASE_URL = "https://jsonplaceholder.typicode.com";

	// Cache for the full list
	private postsCache$?: Observable<Post[]>;

	// Cache for individual posts
	private postCache = new Map<number, Observable<Post>>();

	getPosts(): Observable<Post[]> {
		if (!this.postsCache$) {
			// Cache the response for late subscribers
			this.postsCache$ = this.http
				.get<Post[]>(`${this.BASE_URL}/posts`)
				.pipe(shareReplay(1));
		}
		return this.postsCache$;
	}

	getPost(id: number): Observable<Post> {
		if (!this.postCache.has(id)) {
			// Cache individual post requests
			const post$ = this.http
				.get<Post>(`${this.BASE_URL}/posts/${id}`)
				.pipe(shareReplay(1));
			this.postCache.set(id, post$);
		}
		// Return the cached observable
		return this.postCache.get(id)!;
	}

	clearCache() {
		this.postsCache$ = undefined;
		this.postCache.clear();
	}
}
