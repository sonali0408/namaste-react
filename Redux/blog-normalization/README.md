Normalization

- Recommended in docs for storing items
- No data duplication
- Creates an ID lookup by item id

createEntityAdapter API
React toolkit provides createEntityAdapter api which makes slicess less compplicated & easy to manage

- Abstracts more logic from components & move them to slice
- It has built in CRUD methods
- Automativ selector generation

createEntityAdapter accepts a single options object parameter, with two optional fields inside.

1. selectId
2. sortComparator

e.g const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

CRUD Functions
The primary content of an entity adapter is a set of generated reducer functions for adding, updating, and removing entity instances from an entity state object:

1. addOne: accepts a single entity, and adds it if it's not already present.
2. addMany: accepts an array of entities or an object in the shape of Record<EntityId, T>, and adds them if not already present.
3. setOne: accepts a single entity and adds or replaces it
4. setMany: accepts an array of entities or an object in the shape of Record<EntityId, T>, and adds or replaces them.
5. setAll: accepts an array of entities or an object in the shape of Record<EntityId, T>, and replaces all existing entities with the values in the array.
6. removeOne: accepts a single entity ID value, and removes the entity with that ID if it exists.
7. removeMany: accepts an array of entity ID values, and removes each entity with those IDs if they exist.
8. removeAll: removes all entities from the entity state object.
9. updateOne: accepts an "update object" containing an entity ID and an object containing one or more new field values to update inside a changes field, and performs a shallow update on the corresponding entity.
10. updateMany: accepts an array of update objects, and performs shallow updates on all corresponding entities.
11. upsertOne: accepts a single entity. If an entity with that ID exists, it will perform a shallow update and the specified fields will be merged into the existing entity, with any matching fields overwriting the existing values. If the entity does not exist, it will be added.
12. upsertMany: accepts an array of entities or an object in the shape of Record<EntityId, T> that will be shallowly upserted.
