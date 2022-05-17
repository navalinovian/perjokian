export async function getAllCategories() {
    try{
        const response = await fetch('http://localhost:3000/category');
        // console.log(await response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createCategories(data) {
    const response = await fetch(`/category`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}