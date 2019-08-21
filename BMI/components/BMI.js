export default class BMI{
  bmiCalculate(weight,height,region){
    let bmi = weight/height**2;
    switch(region){
      case 'asian':
        if(bmi <= 18.5){
          return 'Under weight';
        }else if(bmi <= 24.9){
          return 'Normal weight';
        }else if(bmi <= 29.9){
          return 'Overweight';
        }else{
          return 'Obesity';
        }
      case 'western':
        if(bmi <= 19.5){
          return 'Under weight';
        }else if(bmi <= 34.9){
          return 'Normal weight';
        }else if(bmi <= 39.9){
          return 'Overweight';
        }else{
          return 'Obesity';
        }
    }
  }
}
