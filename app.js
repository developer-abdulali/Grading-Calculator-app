var english = +prompt ('Enter your English marks', '1 - 100'); // English Marks
var math = +prompt('Enter your Math marks', '1 - 100');  // Maths Marks
var physics = +prompt('Enter your Physics marks', '1 - 100'); // Physics Marks
var studentMarks = +(english + math + physics);   // Obtained Marks
var percentage = (studentMarks/300*100);  //  finiding percentage

if(studentMarks <= 300 && studentMarks >=251){   
    document.write('Marks Sheet' + '<br>' + 'Total Marks:  300' + '<br>'+ 'Marks obtained: ' + studentMarks + '<br>' + 'Percentage: ' + Math.round(percentage)+'%'  + '<br>' + ' Grade: ' + 'A - one' + '<br>'+ 'Remarks: ' + 'Excellent');
} else if(studentMarks <= 250 && studentMarks >= 241){
    document.write('Marks Sheet' + '<br>' + 'Total Marks:  300' + '<br>'+ 'Marks obtained: ' + studentMarks + '<br>' + 'Percentage: ' + Math.round(percentage)+'%' + '<br>' + ' Grade: ' + 'A' + '<br>'+ 'Remarks: ' + 'Good');
} else if(studentMarks <= 240 && studentMarks >=151){
    document.write('Marks Sheet' + '<br>' + 'Total Marks:  300' + '<br>'+ 'Marks obtained: ' + studentMarks + '<br>' + 'Percentage: ' + Math.round(percentage)+'%'  + '<br>' + ' Grade: ' + 'B' + '<br>'+ 'Remarks: ' + 'You need to improve');
} else if(studentMarks <= 150 && studentMarks >=1){
    document.write('Marks Sheet' + '<br>' + 'Total Marks:  300' + '<br>'+ 'Marks obtained: ' + studentMarks + '<br>' + 'Percentage: ' + Math.round(percentage)+'%'  + '<br>' + ' Grade: ' + 'Fail' + '<br>'+ 'Remarks: ' + 'Sorry');
} else {
    alert('Invalid Result');
}