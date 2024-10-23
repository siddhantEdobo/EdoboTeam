import React, { useEffect, useState } from "react";
import "./MobWishListComponent.css";
import MobHeaderComponent from "../MobHeaderNavigation";
import CollectionProductCard from "../../common/CollectionProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "universal-cookie";
import ProductSkeleton from "../../common/CustomSkeleton/ProductSkeleton"; // Import a loading skeleton component

// const COLLECTIONDATA = [
//   {
//     id: 1,
//     title: "Milk Dairy",
//     description:
//       "Brocollis have clusters of small, tight flower heads viu verpiuhver piuer vrpuivh piuherpuv piuevuepiu  vreivnpiuer piveriu  ipernfp erpierpveroirep  pierp reijv vei",
//     imageUrl:
//       "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
//     price: "₹5000000",
//     mrp: "₹100",
//     discountAmount: "14% Off",
//     quantity: "0",
//     isNew: true,
//     starRating: "4.3",
//     allRating: "5000 Rating",
//   },
//   {
//     id: 2,
//     title: "Coconut oil",
//     description: "Brocollis have clusters of small, tight flower heads...",
//     imageUrl:
//       "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
//     price: "₹50",
//     mrp: "₹100",
//     discountAmount: "14% Off",
//     quantity: "0",
//     isNew: false,
//     starRating: "4.3",
//     allRating: "5000 Rating",
//   },
//   {
//     id: 3,
//     title: "Broccoli",
//     description: "Brocollis have clusters of small, tight flower heads...",
//     imageUrl:
//       "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
//     price: "₹50",
//     mrp: "₹100",
//     discountAmount: "14% Off",
//     quantity: "0",
//     isNew: false,
//     starRating: "4.3",
//     allRating: "5000 Rating",
//   },
//   {
//     id: 4,
//     title: "Broccoli",
//     description: "Brocollis have clusters of small, tight flower heads...",
//     imageUrl:
//       "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6461ce57202645ec68cb941b/cw2607-240x240.png",
//     price: "₹50",
//     mrp: "₹100",
//     discountAmount: "14% Off",
//     quantity: "0",
//     isNew: false,
//     starRating: "4.3",
//     allRating: "5000 Rating",
//   },
// ];

const MobWishListComponent = () => {
  const cookie = new Cookies();
  const token = cookie.get("auth_token");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://13.61.33.202/api/v2/wish-list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          setData(response.data);
          console.log(response);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load wishlist items.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const handleRemove = async (value) => {
    try {
      const response = await axios.post(
        `http://13.61.33.202/api/v2/wishlist-delete?product_id=${value?.product_details?.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        setData((prevData) => ({
          ...prevData,
          results: {
            ...prevData.results,
            data: prevData.results.data.filter(
              (item) => item?.product_details?.id !== value?.product_details?.id
            ),
          },
        }));
      }
    } catch (error) {
      console.error(error);
      setError("Failed to remove the item from the wishlist.");
    }
  };

  if (loading) {
    return (
      <div className="container-lg home-container">
        {/* Display loading skeleton while fetching data */}
        <ProductSkeleton count={3} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-lg home-container">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <>
      <MobHeaderComponent
        text={"Yours Wishlist"}
        // isBack={true}
        // headerText={"Wish List"}
        // isCartShow={false}
        // isEdoboLogo={true}
      />
      <div className="container-lg home-container">
        {data?.results?.data?.map((value) => {
          return (
            <div key={value?.product_details?.id} className="mt-2">
              <CollectionProductCard
                data={value?.product_details}
                title={value?.product_details?.product_name}
                description={value?.product_details?.long_description}
                logo={
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-danger faicons-size"
                    onClick={() => handleRemove(value)}
                  />
                }
                imageUrl={
                  "http://103.165.118.218/edobo/" +
                  value?.product_details?.thumb_image_url
                }
                price={value?.product_details?.compare_price}
                mrp={value?.product_details?.price}
                onClick={() => {
                  console.log("onClick");
                }}
                onWishlistClick={() => {
                  console.log("onWishlistClick");
                }}
                onDecrement={() => {
                  console.log("onDecrement");
                }}
                onIncrement={() => {
                  console.log("onIncrement");
                }}
                onAddtoCartClick={() => {
                  console.log("onAddtoCartClick");
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobWishListComponent;
