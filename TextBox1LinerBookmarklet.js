// All as bookmarklet:
data:text/html,<html><head><script>function countChars(obj){var words= obj.value.match(/\S+/g).length;document.getElementById("charNum").innerHTML = 'original script has '+obj.value.length+' characters and '+words+' words';}function set1Line(obj) {var oneLiner = document.getElementById("origScript").value.replace(/\s/gm," ");document.getElementById("box2").value = oneLiner;}function fixMrColes(obj) {var fixer = document.getElementById("origScript").value;var coded=decodeURIComponent(fixer);document.getElementById("box3").value = coded;}function prettify(obj) {var readable = document.getElementById("origScript").value; var splitter = String.fromCharCode(123); var joiner = String.fromCharCode(123) + '\n\n'; var newer = readable.split(splitter); var newest = newer.join(joiner);document.getElementById("box4").value = newest;}</script></head><body><p id="charNum">0 characters and 0 words</p><form>paste original multi-line bookmarklet below:<br><textarea id="origScript" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onkeyup="countChars(this);"></textarea><br>with line breaks removed below (if was normal JS code):</br><textarea id="box2" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onfocus="set1Line(this);"></textarea><br>reformatted to normal JS code below (if was Mr Coles bookmarklet):</br><textarea id="box3" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onfocus="fixMrColes(this);"></textarea><br>reformatted to readable JS (if was compressed bookmarklet):</br><textarea id="box4" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onfocus="prettify(this);"></textarea></form></body></html>

// bookmarklet made more readable (if you ever need to edit it):
data:text/html,<html><head>
<script>

function countChars(obj){var words= obj.value.match(/\S+/g).length;document.getElementById("charNum").innerHTML = 'original script has '+obj.value.length+' characters and '+words+' words';}

function set1Line(obj) {var oneLiner = document.getElementById("origScript").value.replace(/\s/gm," ");document.getElementById("box2").value = oneLiner;}

function fixMrColes(obj) {var fixer = document.getElementById("origScript").value;var coded=decodeURIComponent(fixer);document.getElementById("box3").value = coded;}

function prettify(obj) {var readable = document.getElementById("origScript").value; var splitter = String.fromCharCode(123); var joiner = String.fromCharCode(123) + '\n\n'; var newer = readable.split(splitter); var newest = newer.join(joiner);document.getElementById("box4").value = newest;}

</script>
</head><body><p id="charNum">0 characters and 0 words</p>
<form>paste original multi-line bookmarklet below:<br><textarea id="origScript" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onkeyup="countChars(this);"></textarea><br>

with line breaks removed below (if was normal JS code):</br>
<textarea id="box2" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onfocus="set1Line(this);"></textarea><br>

reformatted to normal JS code below (if was Mr Coles bookmarklet):</br>
<textarea id="box3" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onfocus="fixMrColes(this);"></textarea><br>

reformatted to readable JS (if was compressed bookmarklet):</br>
<textarea id="box4" rows="8" style="width: 1000px;height: 200px;" wrap="soft" onfocus="prettify(this);"></textarea>

</form></body></html>


/* prettify function above adapted from https://stackoverflow.com/questions/29080989/how-to-replace-the-line-break-in-a-textarea
// String.fromCharCode(123) returns {
// you could add more find/replaces like above to prettify the script
https://stackoverflow.com/questions/863779/how-to-add-line-breaks-to-an-html-textarea (shows how to do split / join with </br>)
https://stackoverflow.com/questions/66773/add-a-linebreak-in-an-html-text-area
https://www.geeksforgeeks.org/how-to-add-line-breaks-to-an-html-textarea/
and https://bobbyhadz.com/blog/javascript-split-string-multiple-separators (how to use a regex to split str by char X or Y)
and https://www.samanthaming.com/tidbits/15-4-ways-to-combine-strings/ (recommends using template strings, i.e., vars for your join & split values as used in prettify function above)

// &#013;&#010; are ascii codes for cr,lf but that solution will work only if you type the ascii codes in the body of the textarea itself IN the html code itself. If you insert these codes via javascript, e.value=" this&#013;&#010;that" they will simply appear right in the text of the textarea as raw untranslated symbols. But you can put "\n" in the string that you are inserting in the textarea that will translate to line breaks. eg: document.getElementById("myTextArea").value = "this \n that"
*/
