import React from "react";

import DashboardScreen from "../pages/DashboardScreen";
import ProductScreen from "../pages/ProductScreen";
import CategoryScreen from "../pages/CategoryScreen";
import ROUTES_NAVIGATION from "./routes";
import RolesScreen from "../pages/RolesScreen";
import PermissionScreen from "../pages/PermissionScreen";
import PincodeScreen from "../pages/PincodeScreen";

import CouponCodesScreen from "../pages/CouponCodesScreen";
import StateCityAreaScreen from "../pages/StateCityAreaScreen";
import TimeSlotScreen from "../pages/TimeSlotScreen";
import DeliveryTypeScreen from "../pages/DeliveryTypeScreen";
import SubStoreScreen from "../pages/SubStoreScreen";
import MainStoreScreen from "../pages/MainStoreScreen";
import CollectionScreen from "../pages/CollectionScreen";
import BrandsScreen from "../pages/BrandsScreen";
import OrdersScreen from "../pages/OrdersScreen";
import OrderCancelledScreen from "../pages/OrderCancelledScreen";
import BannersScreen from "../pages/BannerScreen";
import UsersScreen from "../pages/UsersScreen";
import UserRolePermissionScreen from "../pages/UserRolePermissionScreen";
import RefundScreen from "../pages/RefundScreen";
import InventoryScreen from "../pages/InventoryScreen";
import TaxRuleScreen from "../pages/TaxRuleScreen";
import PaymentMethodScreen from "../pages/PaymentMethodScreen";
import ShippmentScreen from "../pages/ShippmentScreen";
import CustomerUserScreen from "../pages/CustomerUserScreen";

const DrawerNavigation = [
  {
    id: "dashboardscreen",
    parent: "dashboardscreen",
    path: ROUTES_NAVIGATION.DASHBOARD,
    element: <DashboardScreen />,
    state: "dashboardscreen",
    sidebarProps: {
      displayText: "Dashboard",
    },
  },
  {
    id: "product",
    // parent:'product',
    sidebarProps: {
      displayText: "Product Management",
    },
    state: "product",
    child: [
      {
        id: "productscreen",
        parent: "product",
        index: true,
        path: ROUTES_NAVIGATION.PRODUCTS,
        element: <ProductScreen />,
        state: "product.productscreen",
        sidebarProps: {
          displayText: "Product List",
        },
      },
      {
        id: "category",
        parent: "product",
        path: ROUTES_NAVIGATION.MOB_CATEGORY,
        element: <CategoryScreen />,
        state: "product.category",
        sidebarProps: {
          displayText: "Category",
        },
      },
      {
        id: "collection",
        parent: "product",
        path: ROUTES_NAVIGATION.COLLECTIONS,
        element: <CollectionScreen />,
        state: "product.collection",
        sidebarProps: {
          displayText: "Collections",
        },
      },
      {
        id: "brands",
        parent: "product",
        path: ROUTES_NAVIGATION.BRANDS,
        element: <BrandsScreen />,
        state: "product.brands",
        sidebarProps: {
          displayText: "Brands",
        },
      },
      // {
      //   id: "variants",
      //   parent: "product",
      //   path: ROUTES_NAVIGATION.VARIENTS_TYPE,
      //   element: <BrandsScreen />,
      //   state: "product.variants",
      //   sidebarProps: {
      //     displayText: "Variants",
      //   },
      // },
    ],
  },
  {
    id: "marketing",
    parent: "marketing",
    sidebarProps: {
      displayText: "Marketing Management",
    },
    state: "marketing",
    child: [
      {
        id: "couponcodes",
        parent: "marketing",
        index: true,
        path: ROUTES_NAVIGATION.COUPON_CODES,
        element: <CouponCodesScreen />,
        state: "marketing.couponcodes",
        sidebarProps: {
          displayText: "Coupon Codes",
        },
      },
    ],
  },
  {
    id: "master",
    parent: "master",
    sidebarProps: {
      displayText: "Masters",
      icon: <></>,
    },
    state: "master",
    child: [
      // {
      //   id: "roles",
      //   parent: "master",
      //   index: true,
      //   path: ROUTES_NAVIGATION.USERS_ROLES,
      //   element: <RolesScreen />,
      //   state: "master.roles",
      //   sidebarProps: {
      //     displayText: "Roles Master",
      //   },
      // },
      {
        id: "permission",
        parent: "master",
        // index: true,
        path: ROUTES_NAVIGATION.PERMISSION,
        element: <PermissionScreen />,
        state: "master.permission",
        sidebarProps: {
          displayText: "Permission Master",
        },
      },
      {
        id: "rolespermission",
        parent: "master",
        index: true,
        path: ROUTES_NAVIGATION.USERS_ROLE_PERMISSION,
        element: <UserRolePermissionScreen />,
        state: "master.permission",
        sidebarProps: {
          displayText: "Role Permission",
        },
      },
      {
        id: "deliverytypemaster",
        parent: "master",
        index: true,
        path: ROUTES_NAVIGATION.DELIVERY_TYPE_MASTER,
        element: <DeliveryTypeScreen />,
        state: "master.deliverytypemaster",
        sidebarProps: {
          displayText: "DeliveryType Master",
        },
      },
      {
        id: "deliverytype",
        parent: "master",
        index: true,
        path: ROUTES_NAVIGATION.DELIVERY_TYPE,
        element: <DeliveryTypeScreen />,
        state: "master.deliverytype",
        sidebarProps: {
          displayText: "Delivery Type",
        },
      },
      {
        id: "pinconde",
        parent: "master",
        index: true,
        path: ROUTES_NAVIGATION.PINCODE,
        element: <PincodeScreen />,
        state: "master.pincode",
        sidebarProps: {
          displayText: "Pincode",
        },
      },
      // {
      //   id: "timeslot",
      //   parent: "master",
      //   index: true,
      //   path: ROUTES_NAVIGATION.TIME_SLOT,
      //   element: <TimeSlotScreen />,
      //   state: "master.timeslot",
      //   sidebarProps: {
      //     displayText: "Time Slot",
      //   },
      // },
      {
        id: "statecityarea",
        parent: "master",
        // index: true,
        path: ROUTES_NAVIGATION.STATE_CITY_AREA,
        element: <StateCityAreaScreen />,
        state: "master.statecityarea",
        sidebarProps: {
          displayText: "State City & Area",
        },
      },
    ],
  },
  {
    id: "users",
    parent: "users",
    sidebarProps: {
      displayText: "User  Management",
      icon: <></>,
    },
    state: "users",
    child: [
      {
        id: "user",
        parent: "users",
        index: true,
        path: ROUTES_NAVIGATION.USERS,
        element: <UsersScreen />,
        state: "users.user",
        sidebarProps: {
          displayText: "User",
        },
      },
      {
        id: "customer",
        parent: "users",
        index: true,
        path: ROUTES_NAVIGATION.CUSTOMER,
        element: <CustomerUserScreen />,
        state: "users.customer",
        sidebarProps: {
          displayText: "Customer User",
        },
      },
      // {
      //   id: "rolepermission",
      //   parent: "users",
      //   index: true,
      //   path: ROUTES_NAVIGATION.USERS_ROLE_PERMISSION,
      //   element: <UserRolePermissionScreen />,
      //   state: "users.rolepermission",
      //   sidebarProps: {
      //     displayText: "Role Permission",
      //   },
      // },
    ],
  },
  {
    id: "store",
    parent: "store",
    sidebarProps: {
      displayText: "Stores",
      icon: <></>,
    },
    state: "store",
    child: [
      {
        id: "mainstore",
        parent: "store",
        // index: true,
        path: ROUTES_NAVIGATION.MAIN_STORE,
        element: <MainStoreScreen />,
        state: "store.mainstore",
        sidebarProps: {
          displayText: "Main Store",
        },
      },
      {
        id: "substore",
        parent: "store",
        // index: true,
        path: ROUTES_NAVIGATION.SUB_STORE,
        element: <SubStoreScreen />,
        state: "store.substore",
        sidebarProps: {
          displayText: "Sub Store",
        },
      },
    ],
  },
  {
    id: "site",
    parent: "site",
    sidebarProps: {
      displayText: "Site Management ",
      icon: <></>,
    },
    state: "site",
    child: [
      {
        id: "banners",
        parent: "site",
        // index: true,
        path: ROUTES_NAVIGATION.BANNERS,
        element: <BannersScreen />,
        state: "site.banners",
        sidebarProps: {
          displayText: "Banners",
        },
      },
    ],
  },

  {
    id: "order",
    parent: "order",
    sidebarProps: {
      displayText: "Order Management ",
      icon: <></>,
    },
    state: "order",
    child: [
      {
        id: "orders",
        parent: "order",
        // index: true,
        path: ROUTES_NAVIGATION.ORDERS,
        element: <OrdersScreen />,
        state: "order.orders",
        sidebarProps: {
          displayText: "Orders",
        },
      },
      {
        id: "cancel",
        parent: "order",
        // index: true,
        path: ROUTES_NAVIGATION.CANCELLED_ORDER,
        element: <OrderCancelledScreen />,
        state: "order.cancel",
        sidebarProps: {
          displayText: "Cancelled Orders",
        },
      },

      {
        id: "refund",
        parent: "order",
        // index: true,
        path: ROUTES_NAVIGATION.REFUNDS,
        element: <RefundScreen />,
        state: "order.refund",
        sidebarProps: {
          displayText: "Refund",
        },
      },
    ],
  },
  // {
  //   id: "inventorymanagement",
  //   parent: "inventorymanagement",
  //   sidebarProps: {
  //     displayText: "Inventory Management",
  //     icon: <InventoryTwoToneIcon />,
  //   },
  //   state: "inventorymanagement",
  //   child: [
  //     {
  //       id: "inventory",
  //       parent: "inventorymanagement",
  //       // index: true,
  //       path: ROUTES_NAVIGATION.INVENTORY,
  //       element: <InventoryScreen />,
  //       state: "inventorymanagement.inventory",
  //       sidebarProps: {
  //         displayText: "Inventory",
  //       },
  //     },
  //   ],
  // },
  {
    id: "settings",
    parent: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <></>,
    },
    state: "settings",
    child: [
      {
        id: "tax_rule",
        parent: "settings",
        // index: true,
        path: ROUTES_NAVIGATION.TAX_RULE,
        element: <TaxRuleScreen />,
        state: "settings.tax_rule",
        sidebarProps: {
          displayText: "Tax Rule",
        },
      },

      {
        id: "payment_method",
        parent: "settings",
        // index: true,
        path: ROUTES_NAVIGATION.PAYMENT_METHODS,
        element: <PaymentMethodScreen />,
        state: "setings.payment_method",
        sidebarProps: {
          displayText: "Payment Method",
        },
      },

      {
        id: "shippment",
        parent: "settings",
        // index: true,
        path: ROUTES_NAVIGATION.SHIPPMENT,
        element: <ShippmentScreen />,
        state: "setings.shippment",
        sidebarProps: {
          displayText: "Shippment",
        },
      },
    ],
  },

  // {
  //   id: "brand",
  //   parent: "brand",
  //   sidebarProps: {
  //     displayText: "Brand",
  //     icon: <BrandingWatermarkIcon />,
  //   },
  //   state: "brand",
  //   child: [
  //     {
  //       id: "Brandlist",
  //       parent: "brand",
  //       index: true,
  //       path: ROUTES_NAVIGATION.BRANDS,
  //       // element: <PincodeScreen />,
  //       state: "brand.brandlist",
  //       sidebarProps: {
  //         displayText: "Brand List",
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: "collection",
  //   parent: "collection",
  //   sidebarProps: {
  //     displayText: "Collection",
  //     icon: <GridViewOutlinedIcon />,
  //   },
  //   state: "collection",
  //   child: [
  //     {
  //       id: "Collectionslist",
  //       parent: "collection",
  //       index: true,
  //       path: ROUTES_NAVIGATION.COLLECTIONS,
  //       // element: <PincodeScreen />,
  //       state: "collection.Collectionslist",
  //       sidebarProps: {
  //         displayText: "Collection List",
  //       },
  //     },
  //   ],
  // },
];

export default DrawerNavigation;
