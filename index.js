class BoardMember{
  constructor(name, homeState,training){
    this.name=name;
    this.homeState=homeState;
    this.training=training;
  }
  
  veto(){
    return "No, I must disagree";
  }
  
  approve(){
    return "";
  }
  
  doCharity(){
    return"";
  }
  
  releasePressStatement(){
    return "You will see great things from Scuber.";
  }
  
  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }
}