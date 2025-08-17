//1cache dom elements

const resultEl =document.getElementById("result");
const v1El =document.querySelector(".value1");
const v2El =document.querySelector(".value2");
 

//2helpers
 const show =(msg)=>(resultEl.textContent=msg);
  function readNumbers() {
    const a =Number(v1El.value);
    const b =Number(v2El.value)
    return{a,b}
  }


  //step 2 -calculation logic

  function calculate (operation){
    const { a,b}= readNumbers ();
    // guard; both must be valid numbers

    if(!Number.isFinite(a) || !Number.isFinite(b)){
        show("Enter numbers!")
        return;
    }
    show()

    let out;

    switch(operation){
        case "add":
            out = a+b;
            break;
            case"sub":
        out = a-b;
        break;
        case "mul":
            out = a*b;
            break;
            case "div":
                if (b===0){
                    show("Cannot divide by 0");
                    return
                }
                out =a/b;
                break;
                default:
                    out =0;
    
    
    
    
    }

  }

  //step3 reset button

 function resetCalc() {
  v1El.value = "";
  v2El.value = "";
  show("0");
  v1El.focus();
}

document.querySelector('.addition').addEventListener('click', () => calculate('add'));
document.querySelector('.substract').addEventListener('click', () => calculate('sub'));
document.querySelector('.multiply').addEventListener('click', () => calculate('mul'));
document.querySelector('.division').addEventListener('click', () => calculate('div'));
document.querySelector('.reset').addEventListener('click', resetCalc);
