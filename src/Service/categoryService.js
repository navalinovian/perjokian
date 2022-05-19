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
    console.log(data.name);
    const response = await fetch(`http://localhost:3000/category`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'},
        body: JSON.stringify({name: data.name})
      })
    return await response.json();
}