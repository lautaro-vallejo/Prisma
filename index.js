import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
 

const usuarios = await prisma.Usuario.findMany({
    where:{

   nombre: "pedro",
    id:{
        gt:10
    },
}

})
const usuarioPorMail = await prisma.Usuario.findUnique({
    where:{
        email :"usuario@gmail.com"
    }
})

const usuarioASubir ={
nombre: "manu",
apellido: "Espinosa",
email: "hola123@gmail.com",
}
const nuevoUsuario = await prisma.Usuario.create({
    data: usuarioASubir,
})
console.log(usuarios, usuarioPorMail, nuevoUsuario)