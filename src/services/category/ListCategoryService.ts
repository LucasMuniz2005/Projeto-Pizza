 import prisaClient from "../../prisma";

 class ListCategoryService{
    async execute(){

const category = await prisaClient.category.findMany({
    select:{
        id:true,
        name:true,

    }
})

return category

    }
 }

 export {ListCategoryService}