import { Component, input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { JsonPlaceholderService } from "@/app/shared/services/json-placeholder.service";
import { ZardCardComponent } from "@/app/shared/components/card/card.component";
import { ZardButtonComponent } from "@/app/shared/components/button/button.component";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { switchMap } from "rxjs/operators";

@Component({
	selector: "app-post-details-page",
	standalone: true,
	imports: [CommonModule, RouterLink, ZardCardComponent, ZardButtonComponent],
	template: `
    <div class="container mx-auto p-6 max-w-3xl fade-in">
      <div class="mb-6">
        <button z-button zType="ghost" routerLink="/">
          <span class="mr-2">←</span> Back to posts
        </button>
      </div>

      @if (post(); as post) {
        <z-card [zTitle]="post.title" class="overflow-hidden shadow-xl border-primary/10">
          <div class="space-y-8">
            <div class="flex items-center gap-3 text-sm">
               <span class="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Post #{{ post.id }}</span>
               <span class="bg-muted text-muted-foreground px-3 py-1 rounded-full">User ID: {{ post.userId }}</span>
            </div>
            
            <p class="text-xl leading-relaxed text-foreground/90 font-light">
              {{ post.body }}
            </p>

            <div class="pt-6 border-t border-border/50">
               <div class="flex gap-4">
                  <button z-button zType="default">Share</button>
                  <button z-button zType="outline">Save</button>
               </div>
            </div>
          </div>
        </z-card>
      } @else {
        <div class="flex justify-center p-12">
           <div class="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      }
    </div>
  `,
	styles: [
		`
    .fade-in {
      animation: fadeIn 0.3s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
	],
})
export class PostDetailsPage {
	id = input.required<string>();
	private service = inject(JsonPlaceholderService);

	post = toSignal(
		toObservable(this.id).pipe(switchMap((id) => this.service.getPost(+id))),
	);
}
