CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"post" text NOT NULL,
	"link" text NOT NULL,
	"type" text NOT NULL,
	"tooltip_title" text NOT NULL,
	"tooltip_text" text NOT NULL,
	"created" timestamp DEFAULT now()
);
