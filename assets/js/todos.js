var items = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll("ul span");

for(var i = 0; i < items.length; i++){
    items[i].addEventListener("click", (e) => {
        e.target.classList.toggle("completed");
    });
}

deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        var btnElement = e.target;
        var listItem = btnElement.parentNode;

        e.stopPropagation();

        if(listItem.classList.contains("deleted")){
          listItem.classList.remove("deleted");
          setTimeout(function(){
            listItem.classList.remove("visually-deleted");
          }, 20);
        } else {
            listItem.classList.add("visually-deleted");
            setTimeout(function(){
                listItem.classList.add("deleted");
            }, 300);
        }
    });
});