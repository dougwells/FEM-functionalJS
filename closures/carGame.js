var Car = function(){
  var gas = 10;

  function useGas(miles){
    if(gas>0){
      gas = gas - miles/20;
      console.log("gas remaining", gas);
    }else{
      console.log("Out of gas", gas);
    }
  }

  return {
    radio: 91.7,
    changeRadio: function(freq){this.radio=freq},
    go: function(mi){useGas(mi);}
  };
}

var mini = Car();
