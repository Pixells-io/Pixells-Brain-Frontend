import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  calculateSubTotal,
  calculateTotal,
  handleAddRow,
  handleDeleteRow,
  handleInputChange,
} from "./Utils";
import SelectRouterT from "@/components/SelectTransform/SelectRouterT";
/**
 * initialItems -> Lista de items para cargar en tabla
 * isEditable - True -> permite realizar las acciones de la tabla
 *
 *
 */
const QuoteTable = ({
  initialItems,
  deliveryDate,
  isEditable,
  allProducts,
  setTableData,
  tableData,
  productDelete,
  setProductDelete,
}) => {
  const initialRow = {
    item: "",
    code: "",
    value: "",
    discount: "",
    taxes: "",
    quantity: "",
    unitHidden: "",
    delivery_date: "",
    total: "0",
    product_idAux: undefined,
    master_product: "",
    variations: "",
    changes: null,
  };
  const location = useLocation();
  const [productsArray, setProductsArray] = useState([]);
  useEffect(() => {
    arrayFillProducts(allProducts?.products || []);
  }, [allProducts]);

  useEffect(() => {
    if (location.pathname.includes("edit")) {
      setTableData(
        initialItems.length > 0
          ? initialItems.map((item, index) => {
              return {
                ...item,
                id: item.id,
                code: item.code,
                value: Number(item.value),
                discount: Number(item.discount),
                taxes: Number(item.taxes),
                quantity: Number(item.quantity),
                unit: item.unit,
                delivery_date: item.delivery_date,
                total: Number(item.total),
                master_product: Number(item.product.value),
                variations: productsArray.find(
                  (p) => p.name == item.product.label,
                )?.variation_id,
                product_idAux: productsArray.find(
                  (p) => p.name == item.product.label,
                )?.valueId,
                changes: 0,
              };
            })
          : [initialRow],
      );
     } else {
        setTableData([{ ...initialRow, delivery_date: deliveryDate }]);
      }
    }, [location.pathname, initialItems, productsArray, deliveryDate]);

    useEffect(() => {
      changeValueDeliveryDateGlobalInInputs();
    }, [deliveryDate]);

  function arrayFillProducts(data) {
    let array = [];
    data.forEach((element, index) => {
      array.push({
        ...element,
        label: element.name,
        valueId: index + 1,
        value: Number(element.price),
      });
    });
    setProductsArray([...array]);
  }
  const changeValueDeliveryDateGlobalInInputs = () => {
    if (tableData.length > 0) {
      const auxTableData = tableData.map((td) => {
        if (td?.id) {
          return { ...td };
        } else {
          return {
            ...td,
            delivery_date: deliveryDate,
          };
        }
      });
      setTableData([...auxTableData]);
    }
  };
  const columns = useMemo(
    () => [
      { key: "code", header: "Código", type: "text", disabled: false },
      {
        key: "value",
        header: "Precio x Unidad",
        type: "number",
        disabled: false,
      },
      {
        key: "discount",
        header: "Descuento (%)",
        type: "number",
        disabled: false,
      },
      { key: "taxes", header: "Impuesto (%)", type: "number", disabled: true },
      { key: "quantity", header: "Cantidad", type: "number", disabled: false },
      {
        key: "delivery_date",
        header: "Fecha de Entrega",
        type: "date",
        disabled: false,
      },
    ],
    [],
  );
  function handleDeleteRowWithTracking(index) {
    const deletedItem = tableData[index];
    if (deletedItem && deletedItem.slot_id) {
      setProductDelete((prev) => [...prev, { slot_id: deletedItem.slot_id }]);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="flex overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-2 border-b-primario">
              <TableHead>Item</TableHead>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
              <TableHead></TableHead>
              <TableHead>SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <div className="w-[200px]">
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`totalRow[]`}
                      value={""}
                    />
                    <input
                      type="hidden"
                      className="hidden"
                      hidden
                      readOnly
                      name={`id_product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={!!row["id"] ? row["id"] : ""}
                    />
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`master_product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={row["master_product"]}
                    />
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`variations[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={row["variations"]}
                    />

                    <input
                      type="text"
                      hidden
                      className="hidden"
                      readOnly
                      name={`unitHidden[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={row["unit"]}
                    />
                    {!!row["id"] ? (
                      <label>{row["product"].label}</label>
                    ) : (
                      <SelectRouterT
                        name={`product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                        value={
                          productsArray.find(
                            (p) => p.valueId == row["product_idAux"],
                          ) || undefined
                        }
                        options={productsArray}
                        required={false}
                        onChange={(e) =>
                          isEditable &&
                          handleInputChange(
                            (currentPage - 1) * itemsPerPage + rowIndex,
                            "product_idAux",
                            e.valueId,
                            setTableData,
                            productsArray,
                          )
                        }
                      />
                    )}
                  </div>
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    <Input
                      type={column.type}
                      name={`${column.key}[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      className="h-[32px] rounded-[10px] border border-[#D7D7D7] bg-inherit p-1 font-roboto text-sm text-[#44444f] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={row[column.key] ?? ""}
                      disabled={column.disabled}
                      onChange={(e) =>
                        isEditable &&
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          column.key,
                          e.target.value,
                          setTableData,
                        )
                      }
                      readOnly={!isEditable}
                      required={true}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`sub_total[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={
                        calculateSubTotal(row)
                      }
                    />

                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`total[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={calculateTotal(row)}
                    />
                    $
                    {Number(calculateTotal(row)).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      onClick={() => {
                        if (isEditable) {
                          handleDeleteRowWithTracking(rowIndex);
                          handleDeleteRow(
                            (currentPage - 1) * itemsPerPage + rowIndex,
                            setTableData,
                            tableData,
                            setProductDelete,
                            productDelete,
                          );
                        }
                      }}
                      disabled={tableData.length === 1 || !isEditable}
                      className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                    >
                      <IonIcon
                        icon={closeCircle}
                        size="small"
                        className="cursor-pointer text-grisDisabled"
                      />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={(e) =>
            isEditable && handleAddRow(e, setTableData, initialRow,  deliveryDate)
          }
          disabled={!isEditable}
          className="rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
        >
          <IonIcon
            icon={addCircle}
            size="small"
            className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
          />
        </Button>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={chevronForward}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuoteTable;
