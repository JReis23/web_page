import { pgTable, serial, text, varchar, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
	email: varchar('email', { length: 60 }).unique()
});

export const messagesTable = pgTable('messages', {
	id: serial('id').primaryKey(),
	message: text('message'),
	userId: integer('user_id')
		.notNull()
		.references(() => usersTable.id)
});

export const usersTableRelations = relations(usersTable, ({ many }) => ({
	messagesTable: many(messagesTable)
}));

export const messagesTableRelations = relations(messagesTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [messagesTable.userId],
		references: [usersTable.id]
	})
}));
