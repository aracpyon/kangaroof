
export const signup = (user) => {
  return $.ajax({
    method: "POST",
    data: {user},
    url: 'api/users'
  })
}
//put curly braces around the user in order to make it as an object
export const login = (user) => (
  $.ajax ({
    method: "POST",
    data: {user},
    url: 'api/session'

  })
)

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: 'api/session'
  })
)