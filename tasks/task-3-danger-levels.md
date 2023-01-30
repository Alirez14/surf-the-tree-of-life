Danger levels
=============

Extend the database so that we can store "dangerLevels" collection. Each document has a name, level and a MongoDB generated id.
```json
[
  { "name": "not dangerous", "level": 1 },
  { "name": "dangerous", "level": 2 },
  { "name": "very dangerous", "level": 3 },
  { "name": "extremely dangerous", "level": 4 }
]
```
Update the **populate.js** file to ensure that these danger levels exist in the database.

Extend the [task 2](task-2.md) form to have a new input for selecting the dangerLevel. The input should be a dropdown with all the dangerLevels name from the DB sorted by level. 

Extend the [task 2](task-2.md) list page to show the dangerLevel name on the sightings page.