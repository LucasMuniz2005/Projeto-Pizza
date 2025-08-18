import prisaClient from "../../prisma";

interface ItemRequest{
    item_id:string
}

class RemoveItemService{
    async execute({item_id}:ItemRequest){

        const  order = await prisaClient.item.delete({
            where:{
                id:item_id
            }
        })
        return order
    }
}
export{RemoveItemService}