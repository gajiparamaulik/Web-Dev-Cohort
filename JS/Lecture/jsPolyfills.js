const obj1 = {
    fname: 'maulik',
    age: 22
}

console.log(obj1);


var myObject  = {
   color : "red",
   test : function(){
      const testThis = () => {
        console.log(this.color); 
      };
      testThis();
      console.log(this.color);
      return "done!"
   }
};

myObject.test();