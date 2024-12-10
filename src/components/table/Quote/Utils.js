/*Using to calculate Total in table */
export const calculateTotal = (row) => {
  const value = parseFloat(row.value) || 0;
  const quantity = parseFloat(row.quantity) || 0;
  const discount = parseFloat(row.discount) || 0;
  const taxes = parseFloat(row.taxes) || 0;

  if (discount < 0 || discount >= 100) {
    return value * quantity;
  } else {
    return value * quantity * (1 - discount / 100);
  }
};
export const calculateTotalFinal = (row) => {
  const value = parseFloat(row.value) || 0;
  const quantity = parseFloat(row.quantity) || 0;
  const discount = parseFloat(row.discount) || 0;
  const taxes = parseFloat(row.taxes) || 0;

  if (discount < 0 || discount >= 100) {
    return value * quantity * (1 + taxes / 100);
  } else {
    return value * quantity * (1 - discount / 100) * (1 + taxes / 100);
  }
};

export const calculateSubTotalFinal=(data)=>{
  const totalSum = data.reduce((sum, item) => {
    return sum + parseFloat(item.total);
  }, 0);
  return totalSum/*.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })*/
}

export const calculateSubTotal = (row) => {
  const value = parseFloat(row.total) || 0;
  const quantity = parseFloat(row.quantity) || 0;

  return value * quantity;
};

export const calculateTaxes = (row) => {
  const value = parseFloat(row.value) || 0;
  const quantity = parseFloat(row.quantity) || 0;
  const discount = parseFloat(row.discount) || 0;
  const taxes = parseFloat(row.taxes) || 0;

  if (discount < 0 || discount >= 100) {
    return value * quantity * (taxes / 100);
  } else {
     return value * quantity * (1 - discount / 100) * (taxes / 100);
   }
 };

/*ACTIONS OF TABLE*/
export const handleAddRow = (e, setTableData, initialRow,  deliveryDate) => {
  e.preventDefault();
  setTableData((prevData) => [...prevData, { ...initialRow,  delivery_date:  deliveryDate }]);
};

export const handleInputChange = (
  rowIndex,
  key,
  value,
  setTableData,
  products = [],
) => {
  if (key == "product_idAux" && !!value) {
    let findProduct = products.find((p) => p.valueId == value);
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              code: findProduct.code,
              value: findProduct.value,
              product_idAux: value,
              quantity: 0,
              master_product: findProduct.product_master_id,
              variations: findProduct.variation_id,
              taxes: 16,
              discount: 0,
              unit: findProduct.unit,
              changes: item.changes !== undefined && item.changes === 0 ? 1 : item.changes,
              total: calculateTotal(item)/*.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })*/,
            }
          : item,
      ),
    );
  } else {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              [key]: value,
              changes: item.changes !== undefined && item.changes === 0 ? 1 : item.changes,
              total: calculateTotal({ ...item, [key]: value })/*.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })*/,
            }
          : item,
      ),
    );
  }
};


export const handleDeleteRow = (
  rowIndex,
  setTableData,
  tableData,
  setProductDelete,
  productDelete,
) => {
  // setTableData((prevData) => {
  //   if (prevData.length > 1) {
  //     if(!!tableData[rowIndex]?.id){
  //       setProductDelete([...productDelete, tableData[rowIndex].id]);
  //     }
  //     return prevData.filter((_, index) => index !== rowIndex);
  //   }
  //   return prevData;
  // });

  const idDelete = tableData[rowIndex]?.id;

  setTableData((prevData) => {
    if (prevData.length > 1) {
      return prevData.filter((_, index) => index !== rowIndex);
    }
    return prevData;
  });

  if (idDelete) {
    setProductDelete((prevProductDelete) => [...prevProductDelete, idDelete]);
  }
};
