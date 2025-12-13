import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";

import { PostDetailsPage } from "./pages/post-details/post-details.page";

export const routes: Routes = [
	{
		path: "",
		component: HomePage,
	},
	{
		path: "post/:id",
		component: PostDetailsPage,
	},
];
