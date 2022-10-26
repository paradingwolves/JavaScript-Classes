/*
    Assignment 05
    Justin Brierley
    October 24, 2022
*/

 $(document).ready(function () { 
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
            console.log("Method Called");
            if(id === this.id){
                this.id = id;
                this.name = name;
                this.description = description;
                this.category = category;
                document.getElementById("content-item-1").innerHTML = "<h2>Advil</h2>" + "<p>Headache Relief</p>" + "<div id='category'>Pills</div>" + "</div>";
                console.log("Success!!");
            }
            else if(id !== this.id){
                console.log("Error");
            }  
        }
    }

    let item = [
        new ContentItem(1, "Anusol", "Hemroid Medication", "Topical"),
        new ContentItem(2,"Goldbond", "Foot Powder", "Powder"), 
        new ContentItem(3, "Buckley's", "Tastes awful, but it works", "Cough Syrup"), 
        new ContentItem(4, "Cialis", "Ask your doctor", "Pills"), 
        new ContentItem(5, "Tylenol", "Rapid pain relief!", "Pills")
    ];
    let contentDiv = document.getElementById("content-item-list");
    item.forEach(item => contentDiv.innerHTML += "<div class='content-item-wrapper' id='content-item-"+item.id+"'>" + "<h2>" + Object.values(item.name).join("") + "</h2>" + "<p>" + Object.values(item.description).join("") + "</p>" + "<div id='category'>" + Object.values(item.category).join("") + "</div>" + "</div>");
    $(".content-item-wrapper").css({'border':'2px solid black', "margin":'0 auto', "margin-bottom":'5%', "width": '85%', "padding": '10px'});

    $('#updateObject').on('click', function(){
        item[0].updateContentItem(1, "Advil", "Headache Relief", "Pills");
    });
    $('#updateObjectFail').on('click', function(){
        item[0].updateContentItem(67, "Advil", "Headache Relief", "Pills");
    });
}); 
