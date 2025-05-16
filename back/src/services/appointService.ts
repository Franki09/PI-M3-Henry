//? Ahora trabajaremos sobre las funciones de servicio. Recuerda en cada servicio crear, por el momento,
//? un arreglo de elementos que se ajusten a las interfaces creadas que te servirán como “precarga” de datos.
//? A modo de sugerencia, puedes utilizar ChatGPT para crear esos datos y así ahorrar tiempo.

//! En el servicio de credenciales:

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos.
// Debe retornar el ID del par de credenciales creado.

// Implementar una función que recibirá username y password,
//  y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así,
// si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

//! En el servicio de usuarios:

// Implementar una función que pueda retornar el arreglo completo de usuarios.

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO
//  ten en cuenta que al momento de crear el usuario, debe crear su correspondiente
//  par de credenciales llamando a la función correspondiente del servicio de credenciales.
//  Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

//! En el servicio de turnos:

// Implementar una función que pueda retornar el arreglo completo de turnos.

// Implementar una función que pueda obtener el detalle de un turno por ID.

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además,
//  el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente,
//  cambiar su estado a “cancelled
