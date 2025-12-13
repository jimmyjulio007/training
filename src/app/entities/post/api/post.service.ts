import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../model/post.model";

@Injectable({
	providedIn: "root",
})
export class PostService {
	private http = inject(HttpClient);
	private apiUrl = "https://jsonplaceholder.typicode.com";

	getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(`${this.apiUrl}/posts`);
	}
}
