import { schema } from 'normalizr'

export const commoditySchema = new schema.Entity('commodity')

export const commoditiesSchema = new schema.Array(commoditySchema)
