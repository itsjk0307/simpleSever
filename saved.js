// async sign_in({ email, password }) {
//     try {
//       const fetch = await import("node-fetch");

//       const res = await fetch.default(
//         `${base_url}/user/sign_in?access_token=${access_token}`,
//         {
//           method: "POST",
//           body: JSON.stringify({ email, password }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Failed to sign in");
//       }

//       return await res.json();
//     } catch (error) {
//       console.error("Error during sign in:", error.message);
//       throw error;
//     }
//   }

// const base_url = "https://greenshop.abduvoitov.com";
// const access_token = "64bebc1e2c6d3f056a8c85b7";
// const my_access_token = "6586b7ecc956585a6c33b645";

// bodyChecker = (value) => {
//   let result = "Please enter";
//   for (const key in value) {
//     if (!value[key]) result += `${key} `;
//   }
//   return result;
// };

// class User {
//   constructor() {}

//   async sign_in({ email, password }) {
//     if (!email || password) return "Plaese enter email or password";
//     const res = await fetch(
//       `${base_url}/user/sign-in?access_token=${access_token}`,
//       {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return await res.json();
//   }

//   async sign_up({ name, surename, password, email }) {
//     console.log(bodyChecker({ name, surename, password, email }));
//     if (!name || !surename || !password || !email) {
//       return "Please enter your name, surname, password, email";
//     }
//     const response = await fetch(
//       `${base_url}/user/sign_up?access_token=${access_token}`,
//       {
//         method: "POST",
//         body: JSON.stringify({ name, surename, password, email }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return await response.json();
//   }
//   async create_wishlist({ route_path, flower_id }) {
//     const response = await fetch(
//       `${base_url}/api/user/create-wishlist?access_token=${access_token}`,
//       {
//         method: "POST",
//         body: JSON.stringify({ route_path, flower_id }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const responseBody = await response.text();
//     console.log("Response Body:", responseBody);

//     if (!response.ok) {
//       throw new Error(`Failed to create wishlist. Status: ${response.status}`);
//     }

//     return await response.json();
//   }
//   async delete_wishlist({ wishlistId }) {
//     const response = await fetch(
//       `${base_url}/api/user/delete-wishlist?access_token=${access_token}`,
//       {
//         method: "DELETE", // Specify the HTTP method as DELETE
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to delete wishlist. Status: ${response.status}`);
//     }

//     return await response.json();
//   }
// }

// const user = new User();
// user;
// //   .delete_wishlist({
// //     wishlistId: "1e2a45c4-057c-411b-b82c-4a0a13732e4d", // Replace with the actual wishlist ID
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.error("Error:", error.message);
// //   });
// // user
// //   .sign_in({
// //     email: "abduvoitovasadbek3@gmail.com",
// //     // password: "995321025Aa",
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   });

// // user
// //   .sign_up({
// //     email: "abduvoitovasadbek3@gmail.com",
// //     password: "995321025Aa",
// //     name: "Asadbek",
// //     surename: "Abduvoitov",
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.error("Error:", error.message);
// //   });
// user
//   .create_wishlist({
//     route_path: "house-plants",
//     flower_id: "64c4b664b4119fdcdbfcd412",
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
