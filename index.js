let link=
{
  input:"",
  output:""
}
function transformlink()
{
  const linkarray=link.input.split("/");
  let bookid=linkarray[4];
  link.output="https://www.scribd.com/embeds/"+bookid+"/content";
}

function getlink()
{
  form=document.getElementById("linkinput");

  data=new FormData(form);
  for (const value of data.values()) {
    link.input=value;
  }

  transformlink();

  result=document.getElementById("linkresult");
  result.innerText=link.output;

}
