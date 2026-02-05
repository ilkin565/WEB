// JavaScript source code
function Factorial(n)
{
    let f = BigInt(1);
    //document.write(typeof (f));
    //document.write("<pre>");	//preformatted - ??????????? ??????? ? ????? ????????, ?	??? ?? ???????????? ?????????? ?????.
    for (let i = 1n; i <= n; i++)
    {
        f *= i;
        //document.writeln(`${i}! = ${f};`);
}
			//document.write("</pre>");
//Arithmetical overflow
			return f;
}
function Factorial2()
{
    let source_input_field = document.getElementById("factorial-source");
//alert("??????!");
    let source_value = source_input_field.value;
    ////////////////////////////////
    let factorial_result = document.getElementById("factorial-result");
    factorial_result.innerHTML = Factorial(source_value);
}