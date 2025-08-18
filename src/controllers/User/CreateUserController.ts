import { Request, Response } from "express";
import { CreateUserServices } from '../../services/user/CreateUserServices';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserServices = new CreateUserServices();

        // Passa os dados para o serviço criar o usuário e aguarda o resultado
        const user = await createUserServices.execute({ name, email, password });

        // Retorna o usuário criado em JSON na resposta
        return res.json(user);
    }
}

export { CreateUserController }
