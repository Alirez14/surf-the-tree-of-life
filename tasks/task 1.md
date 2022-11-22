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

<!-- 1) showing all species list with pagination 50 per page with all the specie information in row 
- user click on the species should open a new page and on this page we show the species information including a picture about it taken form wikipedia open api 
- there is a save this image link ref to the database and user can click and iin case the image was proper one he can save the link with to the DB
 -->
