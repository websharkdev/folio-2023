CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"post" text NOT NULL,
	"link" text NOT NULL,
	"created" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"link" text NOT NULL,
	"type" text NOT NULL,
	"tooltip_title" text NOT NULL,
	"tooltip_text" text NOT NULL,
	"duration" text NOT NULL,
	"created" timestamp DEFAULT now()
);
