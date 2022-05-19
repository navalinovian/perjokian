export async function getAllProducts() {
    try{
        const response = await fetch('http://localhost:3000/product');
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createProduct(data) {
    const response = await fetch(`/product`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

export async function deleteProduct(id) {
    const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: 'DELETE',
        mode:'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      })
    return await response.json();
}