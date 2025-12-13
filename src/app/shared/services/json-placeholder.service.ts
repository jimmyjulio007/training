import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "@/app/entities/post/model/post.model";

@Injectable({
	providedIn: "root",
})
export class JsonPlaceholderService {
	private readonly http = inject(HttpClient);
	private readonly BASE_URL = "https://jsonplaceholder.typicode.com";

	getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(`${this.BASE_URL}/posts`);
	}
}
