import prisaClient from "../../prisma";

interface OrderRquest{
    order_id:string
}

class RemoveOrderService{
async execute({order_id}:OrderRquest){

const order = await prisaClient.order.delete({
    where:{
        id: order_id,
    }
})

return order

}
}

export{RemoveOrderService}