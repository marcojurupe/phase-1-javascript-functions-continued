// code your solution here
function saturdayFun(activity = 'roller-skate') {  
    if (activity === 'roller-skate') {
        return `This Saturday, I want to ${activity}!`;
    }
    else {
        return 'This Saturday, I want to bathe my dog!';
    }
}

function mondayWork(activity = 'go to the office') {
    if (activity === 'go to the office') {
        return `This Monday, I will ${activity}.`;
    }
    else {
        return 'This Monday, I will work from home.';
    }
}
function wrapAdjective(string = "*") {
    return function(value2 = "special") {
        return `You are ${string}${value2}${string}!`;
    }
}
wrapAdjective("%")("a dedicated programmer");
wrapAdjective("||")("a dedicated programmer");