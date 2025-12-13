import { Component } from "@angular/core";
import { ZardSkeletonComponent } from "@/app/shared/components/skeleton/skeleton.component";

@Component({
	selector: "app-post-list-skeleton",
	standalone: true,
	imports: [ZardSkeletonComponent],
	template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (i of items; track i) {
        <div class="rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col gap-4 p-6">
            <!-- Header -->
            <div class="flex flex-col space-y-1.5">
                <z-skeleton class="h-6 w-3/4" />
                <z-skeleton class="h-4 w-1/4" />
            </div>
            
            <!-- Body -->
            <div class="flex-1 space-y-2 py-2">
                <z-skeleton class="h-4 w-full" />
                <z-skeleton class="h-4 w-11/12" />
                <z-skeleton class="h-4 w-4/5" />
            </div>

            <!-- Footer -->
            <div class="pt-4">
                <z-skeleton class="h-10 w-32 rounded-md" />
            </div>
        </div>
        }
    </div>
    `,
})
export class PostListSkeletonComponent {
	// Create an array of 6 items to simulate multiple skeleton cards
	readonly items = Array.from({ length: 6 }, (_, i) => i);
}
