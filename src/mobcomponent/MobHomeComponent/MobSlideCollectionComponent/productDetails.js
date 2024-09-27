// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { productId } = useParams(); // Get the product ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details from the API using the productId
//     fetch(`/api/v2/product-details?id=${productId}&pincode=${pincode}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data.product))
//       .catch((error) => console.error("Error fetching product details:", error));
//   }, [productId]);

//   return (
//     <div>
//       {product ? (
//         <div>
//           <h1>{product.name}</h1>
//           <img
//             src={"http://103.165.118.218/edobo/" + product.image_url}
//             alt={product.name}
//           />
//           <p>Price: {product.price}</p>
//           <p>Description: {product.description}</p>
//           {/* Other product details */}
//         </div>
//       ) : (
//         <p>Loading product details...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;
