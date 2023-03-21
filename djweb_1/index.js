(function(){
    const cust_img = document.querySelector('#cust_img');
    const cust_name = document.querySelector('#cust_name');
    const cust_des = document.querySelector('#cust_des');

    var index = 0;
    var customer=[];

    function Customer(img,name,des){
        this.img = img;
        this.name = name;
        this.des = des;
    }

    function Create(img,name,des){
        img = "img/img_"+img+".jpg";
        var cust = new Customer(img,name,des);
        customer.push(cust);
    }



    Create('1','Fahad Siddhique','ArnavFlix is something from another dimension, i can watch International movies,webseries at just $9/mo, I regret i didnt find this website before !!');
    Create('2','Amey Rane','With Amazing sporting content included such as Cricket, Kabaddi and also the New Gully Premier League, i think ArnavFlix will be the next big thing, cant wait to see Rohit Sharma back in Action tommorow!');
    Create('3','Sarthak Mahale','Cricket + Hentai + Anupkumar, what else you want as a adult, ArnavFlix has made me mature more than before');
    Create('4','Murtaza Shikhari','I think technically UI could improve, dont worry my internship at ArnavFlix is happening soon, I will change this entire shit');
    Create('5','Soham Thatte','Its high time ArnavFlix removes explicit content!, im so fed up');

    const prev = document.querySelector('.btn-prev');
    const forw = document.querySelector('.btn-for');




    prev.addEventListener('click',(e)=>{
        if(index === 0){
            index = customer.length;
        }
        index--;
        cust_img.src = customer[index].img;
        cust_name.textContent = customer[index].name;
        cust_des.textContent = customer[index].des;
    })

    forw.addEventListener('click',(e)=>{
        if(index === customer.length){
            index = -1;
        }
        index++;
        cust_img.src = customer[index].img;
        cust_name.textContent = customer[index].name;
        cust_des.textContent = customer[index].des;
    })





})();