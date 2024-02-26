ALTER TABLE "projects" ADD COLUMN "duration" text NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "start_date";--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN IF EXISTS "end_date";