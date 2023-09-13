//Create a constructor with 4 properties and 3 methods
function PizzaMachine(toppings,crust,sauce,size){
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.size = size
    this.estimatedDeliveryTime = function(){
        console.log('Calcualting..')
    }
    this.burnMouth = function(){
        console.log('FDAHKJFHADKFLA<GMNAF')
    }
    this.frisbee = function(){
        console.log('YYYYEEEEETTTTT')
    }
}

let pizza = new PizzaMachine('large','deep dish',['spinach','garlic'],'white')