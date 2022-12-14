# 1) 
   - implement a search input on top of the list page 
   - the search bar should have 1.5 sec delay (debounce) and then the list should get filtered by it through the DB eg: Ba -> bacteria... 
   - clicking on species name expands the row and shows complete data of the species [name,extinct,_id,parent,confidence]
   - expanded mode contains text area that the user can add/modify comment about the species
   - previous comment must be default value of the text area
   - comment modification is going to be save to the DB after second click that close the expand mode  
# 2) 
- page that contain a form with 4 inputs [name,species,date,description] 
- species input should be a dropdown with all the species from the DB sorted alphabetically
- after filling and submitting, data is going to be save as a document in new collection in DB
- create new page that shows all the logged data from the form as a list
- each row should have a button that delete the document from the DB 

# 3)
- Extend the database so that we can store "dangerLevels" collection. Each document has a name, level and a mongodb generated id.
```json
[
  { "name": "not dangerous", "level": 1 },
  { "name": "dangerous", "level": 2 },
  { "name": "very dangerous", "level": 3 },
  { "name": "extremely dangerous", "level": 4 }
]
```
- Extend the **populate.js** file to generate these dangerLevels as separate collection.
- extend the [task 2](#2) form to have a new input for selecting the dangerLevel. The input should be a dropdown with all the dangerLevels name from the DB sorted by level. 
- extend the [task 2](#2) list page to show the dangerLevel name also in the log row .

