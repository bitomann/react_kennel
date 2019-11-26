const remoteURL = "http://localhost:5002"

export default {
  get(mode, id) {
    return fetch(`${remoteURL}/${mode}/${id}`).then(result => result.json())
  },
  getAll(mode) {
    console.log("what endpoint", mode)
    return fetch(`${remoteURL}/${mode}`).then(result => result.json())
  },
  delete(mode, id) {
    return fetch(`http://localhost:5002/${mode}/${id}`, {
        method: "DELETE"
      })
      .then(result => result.json())
  },
  post(mode, newPost) {
    return fetch(`${remoteURL}/${mode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    }).then(data => data.json())
  },
  update(editedAnimal) {
    return fetch(`${remoteURL}/${mode}/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  getWithAnimals(id) {
    return fetch(`${remoteURL}/${mode}/${id}?_embed=animals`)
      .then(result => result.json())
  }
}