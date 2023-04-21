var select = document.querySelector('.add-btn');
  select.addEventListener('click', (e)=>{
    e.preventDefault()
            var x = document.querySelector(".Enter-data").value;
            console.log(x)
            var list = document.createElement('li');
            list.classList.add('new-list');

            var btn1 = document.createElement('button');
            btn1.classList.add('cancel');
            
            var btn2 = document.createElement('button');
            btn2.classList.add('tick');

            var insert = document.querySelector(".append-list");
                  if (x === '') {
                    list.innerHTML = "";
                  } 
                  else {
                    list.innerHTML = x;
                    list.appendChild(btn1);
                    list.appendChild(btn2);
                    insert.appendChild(list);
                  }
                  document.querySelector(".Enter-data").value = "";
            
                        btn1.onclick = function(){
                        this.parentElement.remove();
                        }
                            btn2.onclick = function(){
                            list.classList.toggle("strike")
                            }
                    var deleteBtn = document.getElementById('dlt-btn');
                    deleteBtn.addEventListener('click',()=>{
                    insert.innerHTML = "";
                  })
          
  })
  

    
