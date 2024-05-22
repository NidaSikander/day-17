// QUESTion 49
function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`I Enjoy ${hobby}.`);
    });
    }
    logHobbies("reading", "coding" ,"cycling");

    //Question 50
    let myIdealDay = `My ideal day would involve:
    1. wake up early and going for a jog.
    2. Spending a few hours coding on a personal project.
    3. Ending the day by reading a good book.`;

    console.log(myIdealDay);

    //Question 51
    function calculateArea(width:number, height:number):number {
        return width * height;
    }
    let calculateAreaArrow = (width: number ,
        height: number):number => width *height;

        console.log(calculateAreaArrow(5,7));
        