function validation()
{       
	var result=true;
	var i=document.getElementsByName("username")[0].value;
	var atindex=i.indexOf('@');
	var dotindex=i.lastIndexOf('.');
	if(atindex<1||dotindex>=i.length-2||dotindex-atindex<3){
		result=false;
		alert("incorrect entry");
           return(false);
	}
	return(result);
}