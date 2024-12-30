export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product descripton",
    type: "password",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    placeholder: "Select a category",
    options: [
      { id: "electronics", label: "Electronics" },
      { id: "clothes", label: "Clothes" },
      { id: "furniture", label: "Furniture" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    placeholder: "Select a brand",
    options: [
      { id: "samsung", label: "Samsung" },
      { id: "lg", label: "LG" },
      { id: "adidas", label: "Adidas" },
      { id: "levi", label: "Levi" },
      { id: "ikea", label: "IKEA" },
      { id: "wayfair", label: "Wayfair" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter product sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  // {
  //   id: "electronics",
  //   label: "Electronics",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "clothes",
  //   label: "Clothes",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "furniture",
  //   label: "Furniture",
  //   path: "/shop/listing",
  // },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  electronics: "Electronics",
  clothes: "Clothes",
  furniture: "Furniture",
};

export const brandOptionsMap = {
  samsung: "Samsung",
  lg: "LG",
  adidas: "Adidas",
  levi: "Levi",
  ikea: "IKEA",
  wayfair: "Wayfair",
};

export const filterOptions = {
  category: [
    { id: "electronics", label: "Electronics" },
    { id: "clothes", label: "Clothes" },
    { id: "furniture", label: "Furniture" },
  ],
  brand: [
    { id: "samsung", label: "Samsung" },
    { id: "lg", label: "LG" },
    { id: "adidas", label: "Adidas" },
    { id: "levi", label: "Levi" },
    { id: "ikea", label: "IKEA" },
    { id: "wayfair", label: "Wayfair" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "ZIP Code",
    name: "zipCode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your ZIP code",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
