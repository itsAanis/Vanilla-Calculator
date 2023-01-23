//requred abilities of a calculator:
// accept user inputs of numbers, operator, and numbers
//store inputs
//recognise inputs and perform calculations
//return a result
//display all input as its being entered

//accept longer arithmetic operations.
// display all input as it is being entered.


const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', event =>{
        const {target} = event   //we are picking target property from event object
        //console.log target you will see value property
        const{value} = target    // this gets the value from target
        if (!target.matches('button')) {   // here we check if target that was clicked matches button
            return;    //if it doesnt match we dont want to do anything , return is there to exit condition
          } else {
            //console.log(event)
              calculator.parseInput(value)  // if it matches we print just the value
          }
    })       //object destructuring

const calculator = {       
    displayText: '0',   //starting at 0 but screen on form already defauled for 0
    prevTotal: null,      // so that it holds value then can be used for next operation
                        //2+3 =5  it will hold 5 for next operation
    parseInput(value) {     
        if (this.displayText === '0') {
             this.displayText = ''  // will get rid of the 0 so that it wont be there whole time
        }                           // if this condition is correct
        //have any of the non number bottoms been clicked
        switch (value) { 
            case '=':
                this.calcAnswer(this.displayText)
                //calculate the answer
                break;
            case 'AC':
                this.clearAll()// turns screen back to 0
                break;   // if this button press clear all method runs that clears everything
            case '.':    // 
                if (this.displayText == 0) {
                    this.addText('0.') // display text is 0 add this text into screen.
                            // if its another value add value to string so will add 0.
                }
                else { this.addText(value)
                    // add value to text string
                }
                break;
            default:
                this.addText(value)// none of the cases met it does this.
                //which is simple will add
                    // add value to text string
        }
        
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        }
        else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if(isNaN(+(value)) && isNaN(+(this.displayText))) {
            if(isNaN(this.displayText.slice(-1))) { // checks if value is NaN will try convert it to number
// and if display text is a number.
                return; // stops inputting 2 operators in a row. like +*
            }         
    }   this.displayText += value  // implicit type conversion
        this.outputText(this.displayText)
        // will add value to display text 
        // output text will display the text

        },
        
    calcAnswer(equation) {     
        let result = Function("return " + equation)() 
        !(this.displayText == 0) && this.outputText( result)
        this.prevTotal = result
//when = is pressed this method runs. it returns equation(the numbers etc on screen)
//prev total will = results worked out from what was on screen.
        
    },
    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    },

outputText(text) {
    document.querySelector('.calculator-screen').value = text
// output display text to screen
  // console.log(eval(equation)) 
}
};
