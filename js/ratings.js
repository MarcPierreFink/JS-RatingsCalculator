function collect_ratings(){

    const elements= document.querySelectorAll('.rating');
    
    let rating=0
    

    let ratings={
        count: 0,
        sum: 0,
        average:0
    };



    elements.forEach((element) => {
       

        element.id=element.id.replace('star','');
        rating=parseInt(element.id);

        ratings.count+=parseInt(element.value);
        ratings.sum=rating*parseInt(element.value);

        if (ratings.count!==0){

            ratings.average=ratings.sum/ratings.count;

        }


    });


 return ratings;
   

   
};


    document.addEventListener('change', () => {
        const ratings = collect_ratings();
        
        document.querySelectorAll('average').value=ratings.average.toFixed(2);
});




