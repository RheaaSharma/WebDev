

function SubForm (){
    $.ajax({
        url:'https://www.apispreadsheets.com/table/w657uyiT1ZQnhMZo/',
        headers: {"accessKey": "87c9de664ddb4efc93dcbb16b671c0a9", "secretKey": "04a49aef9357098c294fde94eab26d8c"},
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}