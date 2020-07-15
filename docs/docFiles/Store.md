this is another cool feature that we added in xmodal v1.0.0
<br>
with this feature, you can save your modals in a global collection of modals. this is useful when you want to save modal globally and use it later, somewhere in the app

<br>

there are some functions available with this feature that will let you control this collection with ease.

<br>
<br>

## [save(name, options)](docFiles/save) : boolean
the save() method will add new modal to the collection or update an existing modal
<br>
--------------------------
## [get(name)](docFiles/get) : Object
The get() method returns a specified modal from the Collection.
<br>
--------------------------
## [delete(name)](docFiles/delete) : boolean
The delete() method removes the specified modal from the Collection by key.
<br>
--------------------------
## [entries()](docFiles/entries) : array
The entries() method returns a new Iterator object that contains the [key, value] pairs for each modal in the Collection
<br>
--------------------------
## has(name) : boolean
The has() method returns a boolean indicating whether an modal with the specified key exists or not.
<br>
--------------------------


**Check [Global Functions]() section for example and use cases**