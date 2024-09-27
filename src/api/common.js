import apiClient from "./client";
import privateAPIClient from "./privateClient";
import { APIUrlStrings } from "./endpoints";
import privateAPIClientMultiForm from "./privateClientMultiForm";

export const APIAdminLogin = (payload) => {
  return apiClient.post(APIUrlStrings.login, payload);
};

export const APIAdminLogout = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.logout + "?email=" + payload?.emailid
  );
};

// login test
export const APIWebLogin = (payload) => {
  return apiClient.post(APIUrlStrings.loginTest, payload);
};

export const APIWebLogout = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.logout + "?email=" + payload?.emailid
  );
};

// OTP
export const APIgetWebOTP = (payload) => {
  return apiClient.get(APIUrlStrings.submitOtpTest, payload);
};

export const APIWebOTP = (payload) => {
  return apiClient.post(APIUrlStrings.submitOtpTest, payload);
};

export const APIWebUserAccount = (payload, token) => {
  return apiClient.post(APIUrlStrings.UserProfiletest, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// export const APIWebUserAccount = (payload) => {
//   return privateAPIClient.post(APIUrlStrings.UserProfiletest, payload);
// };
// login test end


export const APIgetRoleList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.roles +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateRole = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updateRole, payload);
};

export const APICreateRoles = (payload) => {
  return privateAPIClient.post(APIUrlStrings.createRole, payload);
};

export const APIDeleteRoles = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteRole, payload);
};

export const APIgetPermissionsList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.permissions +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdatePermission = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updatePermission, payload);
};

export const APIDeletePermission = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deletePermission, payload);
};

export const APICreatePermissions = (payload) => {
  return privateAPIClient.post(APIUrlStrings.createPermission, payload);
};

export const APICreateRolesPermissions = (payload) => {
  return privateAPIClientMultiForm.post(
    APIUrlStrings.createRolesPermission,
    payload
  );
};

export const APIRoleWisePermissionList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.roleWisePermission, payload);
};

export const APIgetPincodeList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.pincodes +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APICreatePincode = (payload) => {
  return privateAPIClient.post(APIUrlStrings.createPincode, payload);
};

export const APIUpdatePincode = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updatePincode, payload);
};

export const APIDeletePincode = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deletePincode, payload);
};

export const APIgetTimeSlotList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.timeSlots +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIgetDeliveryTimeSlotDayWise = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.deliveryTimeSlotDayWise +
      "?pincode=" +
      payload?.pincode +
      "&delivery_type_id=" +
      payload?.delivery_type_id +
      "&days_id=" +
      payload?.days_id
  );
};

export const APIUpdateTimeSlot = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updateTimeSlot, payload);
};

export const APIDeleteTimeSlot = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteTimeSlot, payload);
};

export const APICreateTimeSlot = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.createTimeSlot, payload);
};

export const APIgetCustomerInfoList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.customerList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIgetCustomerAddressList = (payload) => {
  return privateAPIClient.post(APIUrlStrings.customerAddressList, payload);
};
export const APIgetAddCustomerAddress = (payload) => {
  return privateAPIClient.post(APIUrlStrings.createCustomerAddress, payload);
};

export const APIAddToCartProduct = (payload) => {
  return privateAPIClient.post(APIUrlStrings.addToCartProduct, payload);
};

export const APIDecreaseProductQty = (payload) => {
  return privateAPIClientMultiForm.post(
    APIUrlStrings.cartProductQtyDecrement,
    payload
  );
};

export const APIIncreaseProductQty = (payload) => {
  return privateAPIClientMultiForm.post(
    APIUrlStrings.cartProductQtyIncrement,
    payload
  );
};

export const APIgetCartProductList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.cartProductList, payload);
};

export const APIgetRemoveCartProduct = (payload) => {
  return privateAPIClient.get(APIUrlStrings.removeCartProduct, payload);
};

export const APIgetStateList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.stateList + "?search_text=" + payload?.search_text
  );
};

export const APIgetCityList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.cityList +
      "?search_text=" +
      payload?.search_text +
      "&id=" +
      payload?.id
  );
};

export const APIgetDeliveryTypeList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.deliveryTypes +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "") +
      "&is_status=" +
      (payload?.is_status === 1 ? 1 : payload?.is_status === 0 ? 0 : "")
  );
};

export const APIUpdateDeliveryType = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updateDeliveryType, payload);
};

export const APIDeleteDeliveryType = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteDeliveryType, payload);
};

export const APICreateDeliveryType = (payload) => {
  return privateAPIClientMultiForm.post(
    APIUrlStrings.createDeliveryType,
    payload
  );
};

export const APIgetMainStoreList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.mainStoreList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateMainStore = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updateMainStore, payload);
};

export const APIDeleteMainStore = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteMainStore, payload);
};

export const APICreateMainStore = (payload) => {
  return privateAPIClient.post(APIUrlStrings.createMainStore, payload);
};

export const APIgetSubStoreList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.subStoreList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateSubStore = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updateSubStore, payload);
};

export const APIDeleteSubStore = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteSubStore, payload);
};

export const APICreateSubStore = (payload) => {
  return privateAPIClient.post(APIUrlStrings.createSubStore, payload);
};

export const APISubStoreIsSubStoresList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.subStoreIsSubStoresList, payload);
};

export const APISubStoreEditList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.subStoreEditList, payload);
};

export const APIgetCategoryEdit = (payload) => {
  return privateAPIClient.get(APIUrlStrings.editCategoryList, payload);
};

export const APIgetMainCategoryList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.mainCategoryList, payload);
};

export const APIgetAllCategoryList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.allCategoryList, payload);
};

export const APIgetSubCategoryList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.subCategoryList, payload);
};

export const APIgetCategoryStatusUpdate = (payload) => {
  return privateAPIClient.get(APIUrlStrings.statusUpdateCategory, payload);
};

export const APICreateCategory = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.createCategory, payload);
};

export const APIgetCollectionList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.collectionsList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateCollection = (payload) => {
  return privateAPIClientMultiForm.post(
    APIUrlStrings.updateCollection,
    payload
  );
};

export const APIDeleteCollection = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteCollection, payload);
};

export const APIStatusUpdateCollection = (payload) => {
  return privateAPIClient.post(APIUrlStrings.statusUpdateCollection, payload);
};

export const APIEditCollection = (payload) => {
  return privateAPIClient.get(APIUrlStrings.editCollection, payload);
};

export const APICreateCollection = (payload) => {
  return privateAPIClientMultiForm.post(
    APIUrlStrings.createCollection,
    payload
  );
};

export const APIgetUsersList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.usersList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateUsers = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.updateUsers, payload);
};
export const APIUpdateStatusUsers = (payload) => {
  return privateAPIClient.post(APIUrlStrings.updateStatusUsers, payload);
};

export const APIDeleteUsers = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteUsers, payload);
};

export const APICreateUsers = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.createUsers, payload);
};
export const APIEditUsers = (payload) => {
  return privateAPIClient.get(APIUrlStrings.editUsers, payload);
};

export const APIgetBrandsList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.brandsList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateBrands = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.updateBrands, payload);
};
export const APIStatusUpdateBrands = (payload) => {
  return privateAPIClient.post(APIUrlStrings.statusUpdateBrands, payload);
};

export const APIDeleteBrands = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteBrands, payload);
};

export const APICreateBrands = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.createBrands, payload);
};
export const APIEditBrands = (payload) => {
  return privateAPIClient.get(APIUrlStrings.editBrands, payload);
};

export const APIgetBannerList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.bannerList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIUpdateBanner = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.updateBanner, payload);
};
export const APIStatusUpdateBanner = (payload) => {
  return privateAPIClient.post(APIUrlStrings.statusUpdateBanner, payload);
};

export const APIDeleteBanner = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteBanner, payload);
};

export const APICreateBanner = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.createBanner, payload);
};
export const APIEditBanner = (payload) => {
  return privateAPIClient.get(APIUrlStrings.editBanner, payload);
};

export const APIgetProductList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.productList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "")
  );
};

export const APIgetPincodeWiseProductsList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.pincodeWiseProducts +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "") +
      "&pincode=" +
      (payload?.pincode || "")
  );
};

export const APIUpdateProduct = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.updateProduct, payload);
};
export const APIStatusUpdateProduct = (payload) => {
  return privateAPIClient.post(APIUrlStrings.statusUpdateProduct, payload);
};

export const APIDeleteProduct = (payload) => {
  return privateAPIClient.post(APIUrlStrings.deleteProduct, payload);
};

export const APICreateProduct = (payload) => {
  return privateAPIClientMultiForm.post(APIUrlStrings.createProduct, payload);
};

export const APIEditProduct = (payload) => {
  return privateAPIClient.get(APIUrlStrings.editProduct, payload);
};

export const APIAddonProductList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.addonProduct, payload);
};

export const APIgetOrderList = (payload) => {
  return privateAPIClient.get(
    APIUrlStrings.orderList +
      "?per_page=" +
      (payload?.per_page || 30) +
      "&page=" +
      (payload?.page || 0) +
      "&search_text=" +
      (payload?.search_text || "") +
      "&ordersBy=" +
      (payload?.ordersBy || "") +
      "&order_status_id=" +
      (payload?.order_status_id || "")
  );
};

export const APIEditOrdersProduct = (payload) => {
  return privateAPIClient.get(APIUrlStrings.orderProducts, payload);
};

export const APIOrderProductsOrderPlace = (payload) => {
  return privateAPIClient.post(APIUrlStrings.orderProductsOrderPlace, payload);
};

export const getProducts = (
  searchParam = "",
  pageNumber = 1,
  rowsPerPage = 10,
  sortBy = "id-desc"
) => {
  return privateAPIClient.get(
    APIUrlStrings.getProducts +
      `?page=${pageNumber}&per_page=${rowsPerPage}&sort_by=${sortBy}&search=${searchParam}`
  );
};

export const getDashboardData = () => {
  return privateAPIClient.get(APIUrlStrings.roles);
};
