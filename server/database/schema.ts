import { sqliteTable as Table, sqliteView as View, text, integer, index, primaryKey } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { generateId } from "../../shared/utils/misc";

export const services = Table('services', {
    id: text('id').primaryKey().$defaultFn(() => generateId('service')),
    title: text('title').notNull(),
    description: text('description').notNull(),
    icon: text('icon'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
})

export const servicesRelations = relations(services, ({ one, many }) => ({

}))

export const images = Table('images', {
    id: text('id').primaryKey().$defaultFn(() => generateId('image')),
    url: text('url').notNull(),
    is_public: integer('is_public', { mode: 'boolean' }).default(false).notNull(),
    resource_id: text('resource_id'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
}, (t) => [
    index('images_resource_id').on(t.resource_id)
])

export const imagesRelations = relations(images, ({ one, many }) => ({
    projectThumbnail: one(projects, { fields: [images.resource_id], references: [projects.id] }),
    partnerThumbnail: one(partners, { fields: [images.resource_id], references: [partners.id] }),
}))

export const projects = Table('projects', {
    id: text('id').primaryKey().$defaultFn(() => generateId('project')),
    title: text('title').notNull(),
    description: text('description').notNull(),
    icon: text('icon'),
    thumbnail: text('thumbnail').references(() => images.id),
    created_at: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
})


export const projectsRelations = relations(projects, ({ one, many }) => ({
    image: one(images, { fields: [projects.thumbnail], references: [images.id] })
}))


export const partners = Table('partners', {
    id: text('id').primaryKey().$defaultFn(() => generateId('partner')),
    name: text('name').notNull(),
    url: text('url'),
    thumbnail: text('thumbnail').references(() => images.id),
    created_at: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
})
export const partnerRelations = relations(partners, ({ one, many }) => ({
    image: one(images, { fields: [partners.thumbnail], references: [images.id] })
}))


export const social = Table('social', {
    id: text('id').primaryKey().$defaultFn(() => generateId('partner')),
    type: text('type', { enum: ['whatsapp', 'instagram', 'facebook', 'linkedin', 'x', 'email', 'tel'] }).notNull(),
    url: text('url'),
    resource_id: text('resource_id'),
    created_at: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
}, (t) => [
    index('social_resource_id').on(t.resource_id)
])
export const socialRelations = relations(social, ({ one, many }) => ({
    team: one(teams, { fields: [social.resource_id], references: [teams.id] }),
    users: one(users, { fields: [social.resource_id], references: [users.id] }),
}))


export const teams = Table(
    'teams',
    {
        id: text('id')
            .primaryKey()
            .$defaultFn(() => generateId('team')),
        name: text('name').notNull(),
        admin: text('admin').references(() => users.id),
        logo: text('logo'),
        timezone: text('timezone', { length: 255 }),
        createdAt: integer('created_at', { mode: 'timestamp' })
            .notNull()
            .default(sql`(unixepoch())`),
        updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(
            () => new Date(),
        ),
    },
    (table) => [index('team_admin_idx').on(table.admin)],
);
export const teamRelations = relations(teams, ({ one, many }) => ({
    users: many(usersToTeams),
    contacts: many(social)
}))


export const usersToTeams = Table('users_to_teams', {
    user_id: text('user_id').notNull().references(() => users.id),
    team_id: text('team_id').notNull().references(() => teams.id),
}, (t) => [
    primaryKey({ columns: [t.user_id, t.team_id] })
])


// users
export const users = Table('users', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => generateId('user')),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password'),
    avatar: text('avatar'),
    bio: text('bio'),
    timezone: text('timezone', { length: 255 }),
    githubId: integer('github_id').unique(),
    githubToken: text('github_token'),
    googleId: text('google_id').unique(),
    googleToken: text('google_token'),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`(unixepoch())`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdateFn(
        () => new Date(),
    ),
});


export const userRelations = relations(users, ({ one, many }) => ({
    teams: many(usersToTeams),
    contacts: many(social)
}))

// roles for users in the future

export const fe_contacts = Table('fe_contacts', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => generateId('fe_c')),
    name: text('name').notNull(),
    email: text('email').notNull(),
    location: text('location'),
    body: text('body').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`(unixepoch())`)
});