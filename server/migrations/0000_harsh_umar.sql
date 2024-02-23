CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"post" text NOT NULL,
	"link" text NOT NULL,
	"created" timestamp DEFAULT now()
);
