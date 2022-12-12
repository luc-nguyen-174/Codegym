let userName=prompt("User Name:")
if (userName=="Admin" || userName=="admin")  //admin
{
    let password=prompt("Password:")
    if (password=="TheMaster")
    {
        alert("Welcome!")
    } else if (password==null)
    {
        alert("Canceled")
    }else
    {
        alert("Wrong Password")
    }
}
else if (userName==null)
{
    alert("Canceled");
}
else
{
    alert("I don't know you.'")
}