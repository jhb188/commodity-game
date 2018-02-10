import { schema } from 'normalizr'

export const commoditySetSchema = new schema.Entity('commoditySet')

export const commoditySetsSchema = new schema.Array(commoditySetSchema)
