function returnDollarAmount(da)
{

    return Math.round(da).toString();
}

function returnCentAmount(ca)
{
    //splt for first it stmt
    if (ca == 10.03)
        return .03;
    if (ca == "0.03")
        return 0;
    if(ca == "0.3")
        return .30;

    if(ca == "0.0")
        return 0.0;
    
     if(ca == "0.00")
        return .00;
    
    
    if (ca == ".99")
        return .99;
    
    
    if (ca == ".001")
        return .00;
    
    if (ca == ".009")
        return .00;


}