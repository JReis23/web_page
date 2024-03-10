CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" varchar(60),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
