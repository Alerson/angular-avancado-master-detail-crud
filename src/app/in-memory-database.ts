import { InMemoryDbService } from "angular-in-memory-web-api";

import { Categorie } from "./pages/categories/shared/categorie.model";

// ESSA CLASSE IRA FAZER O PAPEL DE SIMULAR UM BANDO DE DADOS RETORNANDO
// O OBJETOS CRIADO DENTRO DA CONSTANTE CATEGORIES
export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Categorie[] = [
            { id: 1, name:  "Moradia", description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: "Saúde", description: 'Plano de Saúde e Remédios' },
            { id: 3, name: 'Lazer', description: 'Ciname, Parque, Praia, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer' }
        ];
        return { categories }
    }
}