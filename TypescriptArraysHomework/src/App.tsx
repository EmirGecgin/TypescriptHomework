

function App() {
  // **********************************************
  // ******************* BÖLÜM 1 ******************
  // **********************************************
  // Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
  // Tür girmeyi unutmayalım.


  // Kodu buraya yazalım...
  let ages: number[] = [];




  // **********************************************
  // ******************* BÖLÜM 2 ******************
  // **********************************************
  // "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
  // iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
  // array'lerin içinde string'ler olacak.


  // Kodu buraya yazalım...
  let gameboard: string[][] = [["", ""], ["", ""]];
  let gameboard2: string[][] = [];



  // **********************************************
  // ******************* BÖLÜM 3 ******************
  // **********************************************
  // "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
  // isimli iki property'ye sahip olsun. Örnek:
  // {name: "coffee mug", price: 11.50}


  // Kodu buraya yazalım...

  type Product = {
    name: string,
    price: number
  }
  const product: Product = {
    name: "coffee mug",
    price: 11.50
  };
  console.log(product);


  // **********************************************
  // ******************* BÖLÜM 4 ******************
  // **********************************************
  // "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
  // yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
  // ürünlerin fiyatlarının toplamını dönsün.


  // Kodu buraya yazalım...
  const orderedProduct: Product[] = [
    { name: "Çay", price: 12 },
    { name: "Simit", price: 20 },
    { name: "Oralet", price: 13 }
  ]
  const getTotal = (product: Product[]): number => {
    let total: number = 0;
    for (let i = 0; i < product.length; i++) {
      total += product[i].price;
    }
    return total;
  }
  const totalPrice = getTotal(orderedProduct);
  console.log(totalPrice);
  return (
    <>

    </>
  )
}

export default App
