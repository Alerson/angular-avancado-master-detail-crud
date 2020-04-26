import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categorie } from './pages/categories/shared/categorie.model';
import { Entry } from './pages/entries/shared/entry.model';


// ESSA CLASSE IRA FAZER O PAPEL DE SIMULAR UM BANDO DE DADOS RETORNANDO
// O OBJETOS CRIADO DENTRO DA CONSTANTE CATEGORIES
export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Categorie[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
            { id: 3, name: 'Lazer', description: 'Ciname, Parque, Praia, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer' }
        ];

        const entries: Entry[] = [
            { id: 1, name: 'Gás de Cozinha', categorieId: categories[0].id, categorie: categories[0], paid: true, date: '14/10/2018', amount: '70,80', type: 'expense', description: 'Qualquer descrição para essa despesa' } as Entry,
            { id: 2, name: 'Suplementos', categorieId: categories[1].id, categorie: categories[1], paid: false, date: '14/10/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 3, name: 'Salário na Empresa X', categorieId: categories[3].id, categorie: categories[3], paid: true, date: '15/10/2018', amount: '4405,49', type: 'revenue' } as Entry,
            { id: 4, name: 'Aluguel de Filme', categorieId: categories[2].id, categorie: categories[2], paid: true, date: '16/10/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 5, name: 'Suplementos', categorieId: categories[1].id, categorie: categories[1], paid: true, date: '17/10/2018', amount: '30,00', type: 'expense' } as Entry,
            { id: 6, name: 'Video Game da Filha', categorieId: categories[2].id, categorie: categories[2], paid: false, date: '17/10/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 11, name: 'Uber', categorieId: categories[1].id, categorie: categories[1], paid: true, date: '17/10/2018', amount: '30,00', type: 'expense' } as Entry,
            { id: 12, name: 'Aluguel', categorieId: categories[2].id, categorie: categories[2], paid: false, date: '23/10/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 13, name: 'Gás de Cozinha', categorieId: categories[1].id, categorie: categories[1], paid: false, date: '25/10/2018', amount: '30,00', type: 'expense' } as Entry,
            { id: 14, name: 'Pagamento Pelo Projeto XYZ', categorieId: categories[4].id, categorie: categories[4], paid: true, date: '25/10/2018', amount: '2980,00', type: 'revenue' } as Entry,
            { id: 19, name: 'Aluguel de Filme', categorieId: categories[2].id, categorie: categories[2], paid: false, date: '07/11/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 21, name: 'Video Game da Filha', categorieId: categories[1].id, categorie: categories[1], paid: true, date: '17/11/2018', amount: '30,00', type: 'expense' } as Entry,
            { id: 22, name: 'Cinema', categorieId: categories[2].id, categorie: categories[2], paid: true, date: '18/11/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 23, name: 'Jiu Jitsu', categorieId: categories[1].id, categorie: categories[1], paid: false, date: '21/11/2018', amount: '130,00', type: 'expense' } as Entry,
            { id: 44, name: 'Uber', categorieId: categories[2].id, categorie: categories[2], paid: true, date: '28/11/2018', amount: '15,00', type: 'expense' } as Entry,
            { id: 55, name: 'Cinema', categorieId: categories[1].id, categorie: categories[1], paid: false, date: '28/11/2018', amount: '30,00', type: 'expense' }  as Entry
          ];

        return { categories, entries }
    }
}