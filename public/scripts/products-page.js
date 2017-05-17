window.addEventListener('load', function(){
    dataService.populateProducts(function(error,products){
        if(!error){
            dataService.populateProducts(function(error,products){                 
                var tab = document.querySelector('#productsList table');
                tab.style["width"]="50%";       
                var row = "";

                for(var i = 0; i < products.length; i++) {        
                    if(i==0||i%3==0){
                        row = document.createElement('tr');
                    }        
                    var col = document.createElement('td');  
                    col.style["width"]="33%";
                    col.style["padding"]="15px 15px 15px 15px";
                    col.style["margin"]="5px 5px 5px 5px";
                    col.style["background-color"]="red";
                    row.appendChild(col);
                    var titleNode = document.createElement('p');
                    titleNode.style["font-weight"] = "bold";
                    titleNode.innerText = products[i].title;    
                    col.appendChild(titleNode);
                    col.appendChild(document.createTextNode(products[i].description));
                    col.appendChild(document.createElement('br'))
                    col.appendChild(document.createTextNode(products[i].category));
                    col.appendChild(document.createElement('br'))
                    col.appendChild(document.createTextNode(products[i].price));
                    col.appendChild(document.createElement('br'))
                    col.appendChild(document.createTextNode(products[i].quantity));
                    col.appendChild(document.createElement('br'))
                    var button = document.createElement('button');
                    button.innerText = "Buy";
                    col.appendChild(button);
                    tab.appendChild(row);
                }
            });
        } else {
            console.log(error);
        }
    });

    var sortButton = document.getElementById('sort');
    sortButton.addEventListener('click',function(){
        dataService.sortByPrice(function(error,products){
            if(!error){
                dataService.sortByPrice(function(error,products){                 
                    var tab = document.querySelector('#productsList table');
                    tab.innerHTML = "";
                    tab.style["width"]="50%";       
                    var row = "";

                    for(var i = 0; i < products.length; i++) {        
                        if(i==0||i%3==0){
                            row = document.createElement('tr');
                        }        
                        var col = document.createElement('td');  
                        col.style["width"]="33%";
                        col.style["padding"]="15px 15px 15px 15px";
                        col.style["margin"]="5px 5px 5px 5px";
                        col.style["background-color"]="red";
                        row.appendChild(col);
                        var titleNode = document.createElement('p');
                        titleNode.style["font-weight"] = "bold";
                        titleNode.innerText = products[i].title;    
                        col.appendChild(titleNode);
                        col.appendChild(document.createTextNode(products[i].description));
                        col.appendChild(document.createElement('br'))
                        col.appendChild(document.createTextNode(products[i].category));
                        col.appendChild(document.createElement('br'))
                        col.appendChild(document.createTextNode(products[i].price));
                        col.appendChild(document.createElement('br'))
                        col.appendChild(document.createTextNode(products[i].quantity));        
                        col.appendChild(document.createElement('br'))
                        var button = document.createElement('button');
                        button.innerText = "Buy";
                        col.appendChild(button);
                        tab.appendChild(row);
                    }
                });
            } else {
                console.log(error);
            }
        });
    });

    var searchInput = document.getElementById('search');
    searchInput.addEventListener('keypress',function(){
        dataService.search(function(error,products){
            if(!error){
                dataService.search(function(error,products){                 
                    var tab = document.querySelector('#productsList table');
                    tab.innerHTML = "";
                    tab.style["width"]="50%";       
                    var row = "";

                    for(var i = 0; i < products.length; i++) {        
                        if(i==0||i%3==0){
                            row = document.createElement('tr');
                        }        
                        var col = document.createElement('td');  
                        col.style["width"]="33%";
                        col.style["padding"]="15px 15px 15px 15px";
                        col.style["margin"]="5px 5px 5px 5px";
                        col.style["background-color"]="red";
                        row.appendChild(col);
                        var titleNode = document.createElement('p');
                        titleNode.style["font-weight"] = "bold";
                        titleNode.innerText = products[i].title;    
                        col.appendChild(titleNode);
                        col.appendChild(document.createTextNode(products[i].description));
                        col.appendChild(document.createElement('br'))
                        col.appendChild(document.createTextNode(products[i].category));
                        col.appendChild(document.createElement('br'))
                        col.appendChild(document.createTextNode(products[i].price));
                        col.appendChild(document.createElement('br'))
                        col.appendChild(document.createTextNode(products[i].quantity));        
                        col.appendChild(document.createElement('br'))
                        var button = document.createElement('button');
                        button.innerText = "Buy";
                        col.appendChild(button);
                        tab.appendChild(row);
                    }
                });
            } else {
                console.log(error);
            }
        });
    });
});