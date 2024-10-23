import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const foodItemSchema = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string(),
  calories: z.number(),
  isActive: z.boolean()
})

export const foodMenuSchema = z.object({
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  foodItems: z.array(foodItemSchema),
})

export type FoodItem = z.infer<typeof foodItemSchema>
export type FoodMenu = z.infer<typeof foodMenuSchema>