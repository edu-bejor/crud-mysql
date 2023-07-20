(async () =>{
    const database = require('./db');
    const Produto = require('./produto');
    await database.sync(); //conecta ao banco

    /*const novoProduto = await Produto.create({
        nome: 'Teclado',
        preco: 199,
        descricao: 'Teclado USB'
    })
    console.log(novoProduto);*/

    /*
    const produto = await Produto.findByPk(1); //seleciona o produto com id 1
    console.log(produto);

    produto.descricao = 'alterado';
    await produto.save(); //edita */

    const produto = await Produto.findByPk(4); //seleciona o produto com id 4
    console.log(produto);

    await produto.destroy() //apaga


})();
