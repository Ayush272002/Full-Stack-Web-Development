function App() {
  // //Example #1
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <>
  //   {numbers.map(number => (
  //     <ul key = {Math.random() * 10}>
  //       <li>{number}</li>
  //     </ul>
  //   ))}
  //   </>
  // );

  //Example 2
  const userInfo = [
    {
      username : "Ayush",
      email : "ayush@gmail.com",
      location : "UK"
    },
    {
      username : "ABC",
      email : "abc@gmail.com",
      location : "USA"
    },
    {
      username : "XYZ",
      email : "xyz@gmail.com",
      location : "France"
    }
  ]

  return(
    <>
    {userInfo.map(user => (
      <ul key = {Math.random() * 10}>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.location}</li>
      </ul>
    ))}
    </>
  )
}

export default App;
