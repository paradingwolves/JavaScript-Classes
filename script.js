/*
    Assignment 05
    Justin Brierley
    W0724299
    October 24, 2022
*/

/* $(document).ready(function () { */
    class ContentItem {
        id;
        name;
        description;
        category;
        constructor(id, name, description, category) {
            console.log("Item list has been created...");
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }
        updateContentItem(id, name, description, category){
            /* for( let i = 0; i < this.length; i++){
                if(item[i].id == this.id){
                    this.name = item[i].name; */
                    console.log(this);
               /*  }
            }   */
        }
    }

    let item = [new ContentItem(1, "Anusol", "Hemroid Medication", "Topical"),new ContentItem(1,"Goldbond", "Foot Powder", "Powder"), new ContentItem(3, "Buckley's", "Tastes awful, but it works", "Cough Syrup"), new ContentItem(4, "Cialis", "Ask your doctor", "Pills"), new ContentItem(5, "Tylenol", "Rapid pain relief!", "Pills")];
    let contentDiv = document.getElementById("content-item-list");
    for( let i = 0; i < item.length; i++){
        item[i].updateContentItem(item.id, item.name, item.description, item.category);
    }
    item.forEach(item => contentDiv.innerHTML += "<div class='content-item-wrapper' id='content-item-"+item.id+"'>" + Object.values(item.id.toString())  + "<h4>" + Object.values(item.name).join("") + "</h4>" + "<p>" + Object.values(item.description).join("") + "</p>" + "<div id='category'>" + Object.values(item.category).join("") + "</div>" + "</div>");
    $(".content-item-wrapper").css({'border':'2px solid black', "margin":'0 auto', "margin-bottom":'5%', "width": '85%', "padding": '10px'});
/* }); */