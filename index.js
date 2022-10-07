

function bmicalculate() {

    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    let bmi = (weight/(height/100)**2).toFixed(2)

    


    if (bmi<=18.5){
        document.getElementById('output').innerHTML = `Your BMI is ${bmi} which means You are Underweight`
    }else if(bmi>18.5 && bmi<24.9){
        document.getElementById('output').innerHTML = `Your BMI is ${bmi} which means You are Normal`
    }else if(bmi>25 && bmi<29.9){
        document.getElementById('output').innerHTML = `Your BMI is ${bmi} which means You are Overweight`
    }else{
        document.getElementById('output').innerHTML = `Your BMI is ${bmi} which means You are Obesity`
    }
    
   
}






