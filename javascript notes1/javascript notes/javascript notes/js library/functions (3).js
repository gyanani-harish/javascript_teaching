function count_no_of_digits()
{
	var n=parseInt(document.getElementById("as").value);
	var i=0;
	for (i=0;n!=0;i++)
	{
		n = parseInt(n/10);
	}
	return i;
}	
function break_digits_in_reverse()
{
	var n=parseInt(document.getElementById("as").value);
	var i=0;
	for (i=0;n!=0;i++)
	{
		var r=parseInt(n%10);
		document.write(r+"<br />");
		n = parseInt(n/10);
	}
}	