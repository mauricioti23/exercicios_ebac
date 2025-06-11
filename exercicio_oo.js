function Batata(tipo) {
    this.tipo = tipo;
}

function Vendedor(nome, tipo, preco, quantidade){
    Batata.call(this, tipo);
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.lucro = this.preco * this.quantidade;
    
    }

function Delivery(nome, tipo, preco, quantidade){
    Vendedor.call(this, nome, tipo, preco, quantidade);
}


const vendedor1 = new Vendedor("Vandercleisson", "fritas", 5, 800);
console.log(vendedor1);

const vendedor2 = new Vendedor("Kezia", "assada", 8, 1500);
console.log(vendedor2);

const delivery1 = new Delivery("Shopping", "Fritas", 15, 4000);
console.log(delivery1);

const delivery2 = new Delivery("Av. Paulista", "Assada", 12, 5600);
console.log(delivery2);