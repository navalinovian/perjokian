export async function getAllProducts() {
    try{
        const response = await fetch('http://localhost:3000/api/product');
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function getProductsById(id) {
    try{
        const response = await fetch(`http://localhost:3000/api/product/${id}`);
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function createProduct(data) {
    const response = await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: data.name, price:data.price, stock:data.stock, category_id:data.category})
      })
    return await response.json();
}

export async function updateProduct(data) {
    const response = await fetch(`http://localhost:3000/api/product/${data.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: data.name, price:data.price, stock:data.stock, category_id:data.category})
      })
    return await response.json();
}

export async function deleteProduct(id) {
    const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'DELETE',
        mode:'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      })
    return await response.json();
}