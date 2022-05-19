export async function getAllCategories() {
    try{
        const response = await fetch('http://localhost:3000/category');
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createCategory(data) {
    const response = await fetch(`http://localhost:3000/category`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        body: JSON.stringify({name: data.name})
      })
    return await response.json();
}

export async function deleteCategory(id) {    
    const response = await fetch(`http://localhost:3000/category/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      })
    return await response.json();
}