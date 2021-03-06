export async function getAllCategories() {
    try{
        const response = await fetch('http://localhost:3000/api/category');
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function getCategoriesById(id) {
    try{
        const response = await fetch(`http://localhost:3000/api/category/${id}`);
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function updateCategory(data) {
    const response = await fetch(`http://localhost:3000/api/category/${data.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        body: JSON.stringify({name: data.name})
      })
    return await response.json();
}

export async function createCategory(data) {
    const response = await fetch(`http://localhost:3000/api/category`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        body: JSON.stringify({id:data.id ,name: data.name})
      })
    return await response.json();
}

export async function deleteCategory(id) {    
    const response = await fetch(`http://localhost:3000/api/category/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      })
    return await response.json();
}