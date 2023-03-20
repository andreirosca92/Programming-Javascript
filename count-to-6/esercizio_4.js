const foot = {
        kick() {
            this.yelp = "Ouch!";

            setImmediate(() => {
              console.log(this.yelp);
            });
          },
  };
foot.kick();
/*

const foot ={
    kick : function (){
        this.yelp = "Ouch!";
        setImmediate( () => console.log(this.yelp));

  }

};
foot.kick()

esempio con funzione l'uso di this (bind() un'altra soluzione)
const foot ={
    kick : function (){
        this.yelp = "Ouch!";
        const that=this;
        setImmediate( () => console.log(that.yelp));

  }

};
foot.kick()

*/
