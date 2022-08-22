import { url } from "../config";

export const apiService = {};

apiService.handleExerciseSubmission = (userId, exerciseId) => {
  console.log(userId, exerciseId, 'los id')
  return fetch(`${url}/userex/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({exerciseId})
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);
}


apiService.handlePostSolution = (solution, exerciseId) => {
  const {username, title, explanation, code} = solution;
  return fetch(`${url}/solutions`, {
    method:'POST',
    body: JSON.stringify({title, explanation, solution: code, exerciseId, userId: username})
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => e)
}
