import { z } from "zod"
import { studentSchema } from "../students/schema"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const roomSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.string(),
  type: z.string(),
  capacity: z.number(),
  students: z.array(studentSchema),
  isActive: z.boolean()
})

export type Room = z.infer<typeof roomSchema>