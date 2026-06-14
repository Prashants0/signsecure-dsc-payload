import type { CollectionAfterReadHook } from 'payload'
import { User } from 'src/payload-types'

// The `user` collection has access control locked so that users are not publicly accessible
// This means that we need to populate the authors manually here to protect user privacy
// GraphQL will not return mutated user data that differs from the underlying schema
// So we use an alternative `populatedAuthors` field to populate the user data, hidden from the admin UI
export const populateAuthors: CollectionAfterReadHook = async ({ doc, req }) => {
  // Skip if no req context (e.g., during static generation without proper context)
  if (!req?.payload) {
    // Set empty array to prevent undefined errors
    doc.populatedAuthors = []
    return doc
  }

  if (doc?.authors && doc.authors.length > 0) {
    const authorDocs: User[] = []

    for (const author of doc.authors) {
      try {
        const authorId = typeof author === 'object' ? author?.id : author
        if (!authorId) continue

        const authorDoc = await req.payload.findByID({
          id: authorId,
          collection: 'users',
          depth: 0,
          overrideAccess: true,
          req,
        })

        if (authorDoc) {
          authorDocs.push(authorDoc)
        }
      } catch (error) {
        // Silently fail during static generation if database tables don't exist
        // or if there are access control issues
        // Only log in development to avoid build failures
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Failed to populate author ${typeof author === 'object' ? author?.id : author}:`, error)
        }
        // Continue to next author instead of failing the entire hook
        continue
      }
    }

    doc.populatedAuthors = authorDocs.map((authorDoc) => ({
      id: authorDoc.id,
      name: authorDoc.name,
    }))
  } else {
    // Ensure populatedAuthors is always an array
    doc.populatedAuthors = []
  }

  return doc
}
