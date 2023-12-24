

function convertDate(date){

    const myDate =  date.getDate();
    const myMonth = date.getMonth()+1;

    return myDate+"/"+myMonth
}
export default convertDate 