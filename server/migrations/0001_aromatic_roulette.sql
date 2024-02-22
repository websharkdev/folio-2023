CREATE TABLE IF NOT EXISTS "product" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text
);
--> statement-breakpoint
DROP TABLE "account";--> statement-breakpoint
DROP TABLE "likes";--> statement-breakpoint
DROP TABLE "posts";--> statement-breakpoint
DROP TABLE "user";