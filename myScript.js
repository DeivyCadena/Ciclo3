//tabla disfraz

function leerDisfraz(){
    //funcion GET
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
            type : 'GET',
            dataType : 'json',
    
            success : function(disfraz) {
                let cs=disfraz.items;
                $("#listaDisfraz").empty();
                for(i=0;i<cs.length;i++){
                    
                    $("#listaDisfraz").append("<table>" + "<thead>"+ "<th>" + "ID" +"</th>" + "<th>" + "marca" +"</th>" + "<th>" + "modelo" +"</th>" + "<th>" + "categoria" +"</th>"  + "<th>" + "nombre" +"</th>" +"</thead>"+"<tbody>"+"<tr>" + "<b>"+   "<td>" +cs[i].id + "<b>"  + "</th>"+ "<td>" + cs[i].brand + "</td>" + "<td>" + cs[i].model + "<td>"+ cs[i].category_id + "</td>" + "<td>"+ cs[i].name + "</td>"+"<br>" + "</tr>"+"</tbody>"+"</table>");
                    $("#listaDisfraz").append("<button onclick='borrarDisfraz("+cs[i].id+")'> Borrar </button><br>")
                }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            },
           
        });
    }
    
    function guardarDisfraz(){
        let IdDisfraz=$("#idDisfraz").val();
        let Marca=$("#marcaDisfraz").val();
        let Modelo=$("#modeloDisfraz").val();
        let Categoria=$("#categoriaDisfraz").val();
        let Nombre=$("#nombreDisfraz").val();
    
        let data={
            id:IdDisfraz,
            brand:Marca,
            model:Modelo,
            category_id:Categoria,
            name:Nombre
        };
    
        let dataTosend=JSON.stringify(data);
        //console.log(dataTosend);
        
    
    
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
            type : 'POST',
            dataType : 'json',
            data:dataTosend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idDisfraz").val();
                $("#marcaDisfraz").val();
                $("#modeloDisfraz").val();
                $("#categoriaDisfraz").val();
                $("#nombreDisfraz").val();
            },
            error : function(xhr, status) {
               // alert('ha sucedido un problema');
            },
            complete: function(){
                leerDisfraz();
            }
           
        });
    }
    
    
    function editarDisfraz(){
        let IdDisfraz=$("#idDisfraz").val();
        let Marca=$("#marcaDisfraz").val();
        let Modelo=$("#modeloDisfraz").val();
        let Categoria=$("#categoriaDisfraz").val();
        let Nombre=$("#nombreDisfraz").val();
    
        let data={
            id:IdDisfraz,
            brand:Marca,
            model:Modelo,
            category_id:Categoria,
            name:Nombre
        };
    
        let dataTosend=JSON.stringify(data);
        //console.log(dataTosend);
        
    
    
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
            type : 'PUT',
            dataType : 'json',
            data:dataTosend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idDisfraz").val();
                $("#marcaDisfraz").val();
                $("#modeloDisfraz").val();
                $("#categoriaDisfraz").val();
                $("#nombreDisfraz").val();
            },
            error : function(xhr, status) {
               // alert('ha sucedido un problema');
            },
            complete: function(){
                leerDisfraz();
            }
           
        });
    }
    
    function borrarDisfraz(IdDisfraz){
        
        let data={
            id:IdDisfraz
        };
    
        let dataTosend=JSON.stringify(data);
        //console.log(dataTosend);
    
    
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
            type : 'DELETE',
            //dataType : 'json',
            data:dataTosend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idDisfraz").val();
                $("#marcaDisfraz").val();
                $("#modeloDisfraz").val();
                $("#categoriaDisfraz").val();
                $("#nombreDisfraz").val();
            },
            error : function(xhr, status) {
               // alert('ha sucedido un problema');
            },
            complete: function(){
                leerDisfraz();
            }
           
        });
    }
    

//******************************************************************************************************************* */
//tabla clientes

function leerClientes(){
//funcion GET
    $.ajax({
        url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',

        success : function(clientes) {
            let cs=clientes.items;
            $("#listaClientes").empty();
            for(i=0;i<cs.length;i++){
                
                $("#listaClientes").append("<table>" + "<thead>"+ "<th>" + "ID" +"</th>" + "<th>" + "nombre" +"</th>" + "<th>" + "correo" +"</th>" + "<th>" + "edad" +"</th>"  +"</thead>"+"<tbody>"+"<tr>" + "<b>"+   "<td>" +cs[i].id + "<b>"  + "</th>"+ "<td>" + cs[i].name + "</td>" + "<td>" + cs[i].email + "<td>"+ cs[i].age + "</td>"+"<br>" + "</tr>"+"</tbody>"+"</table>");
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'> Borrar </button><br>")
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
       
    });
}

function guardarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mail=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mail,
        age:edad
    };

    let dataTosend=JSON.stringify(data);
    //console.log(dataTosend);
    


    $.ajax({
        url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        dataType : 'json',
        data:dataTosend,
        contentType:'application/json',

        success : function(json) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
           // alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
       
    });
}


function editarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mail=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mail,
        age:edad
    };

    let dataTosend=JSON.stringify(data);
    //console.log(dataTosend);


    $.ajax({
        url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        //dataType : 'json',
        data:dataTosend,
        contentType:'application/json',

        success : function(json) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
           // alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
       
    });
}

function borrarCliente(idCliente){
    
    let data={
        id:idCliente
    };

    let dataTosend=JSON.stringify(data);
    //console.log(dataTosend);


    $.ajax({
        url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'DELETE',
        //dataType : 'json',
        data:dataTosend,
        contentType:'application/json',

        success : function(json) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
           // alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
       
    });
}


//******************************************************************************************************************** */
// Tabla mensaje

function leerMensaje(){
    //funcion GET
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'GET',
            dataType : 'json',
    
            success : function(mensaje) {
                let cs=mensaje.items;
                $("#listaMensajes").empty();
                for(i=0;i<cs.length;i++){
                    
                    $("#listaMensajes").append("<table>" + "<thead>"+ "<th>" + "ID" +"</th>" + "<th>" + "mensaje" +"</th>" + "</thead>"+ "<b>"+   "<td>" +cs[i].id + "<b>"  + "</th>"+ "<td>" + cs[i].messagetext + "<br>" + "</tr>"+"</tbody>"+"</table>");
                    $("#listaMensajes").append("<button onclick='borrarMensaje("+cs[i].id+")'> Borrar </button><br>")
                }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            },
           
        });
    }
    
    function guardarMensaje(){
        let IdMensaje=$("#idMensaje").val();
        let Mensaje=$("#Mensaje").val();
            
        let data={
            id:IdMensaje,
            messagetext:Mensaje,
        };
    
        let dataTosend=JSON.stringify(data);
        //console.log(dataTosend);
        
    
    
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'POST',
            dataType : 'json',
            data:dataTosend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idMensaje").val();
                $("#Mensaje").val();
            },
            error : function(xhr, status) {
               // alert('ha sucedido un problema');
            },
            complete: function(){
                leerMensaje();
            }
           
        });
    }
    
    
    function editarMensaje(){
        let IdMensaje=$("#idMensaje").val();
        let Mensaje=$("#Mensaje").val();
            
        let data={
            id:IdMensaje,
            messagetext:Mensaje,
        };
    
        let dataTosend=JSON.stringify(data);
        //console.log(dataTosend);
        
    
    
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'PUT',
            dataType : 'json',
            data:dataTosend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idMensaje").val();
                $("#Mensaje").val();
            },
            error : function(xhr, status) {
               // alert('ha sucedido un problema');
            },
            complete: function(){
                leerMensaje();
            }
           
        });
    }
    
    function borrarMensaje(IdMensaje){
        
        let data={
            id:IdMensaje
        };
    
        let dataTosend=JSON.stringify(data);
        //console.log(dataTosend);
    
    
        $.ajax({
            url : 'https://gb36620be53bec0-reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'DELETE',
            //dataType : 'json',
            data:dataTosend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idMensaje").val();
                $("#Mensaje").val();
            },
            error : function(xhr, status) {
               // alert('ha sucedido un problema');
            },
            complete: function(){
                leerMensaje();
            }
           
        });
    }

