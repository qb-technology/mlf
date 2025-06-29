CREATE TABLE `fe_contacts` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`location` text,
	`body` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `images` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`is_public` integer DEFAULT false NOT NULL,
	`resource_id` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `images_resource_id` ON `images` (`resource_id`);--> statement-breakpoint
CREATE TABLE `partners` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`url` text,
	`thumbnail` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`thumbnail`) REFERENCES `images`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`icon` text,
	`thumbnail` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`thumbnail`) REFERENCES `images`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`icon` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `social` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`url` text,
	`resource_id` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `social_resource_id` ON `social` (`resource_id`);--> statement-breakpoint
CREATE TABLE `teams` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`admin` text,
	`logo` text,
	`timezone` text(255),
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer,
	FOREIGN KEY (`admin`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `team_admin_idx` ON `teams` (`admin`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`password` text,
	`avatar` text,
	`bio` text,
	`timezone` text(255),
	`github_id` integer,
	`github_token` text,
	`google_id` text,
	`google_token` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_github_id_unique` ON `users` (`github_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_google_id_unique` ON `users` (`google_id`);--> statement-breakpoint
CREATE TABLE `users_to_teams` (
	`user_id` text NOT NULL,
	`team_id` text NOT NULL,
	PRIMARY KEY(`user_id`, `team_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`team_id`) REFERENCES `teams`(`id`) ON UPDATE no action ON DELETE no action
);
