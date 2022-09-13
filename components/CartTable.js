
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { useCartStore } from '../util/CartStore';

const CartTable = () => {

  const { products, addAmountInCart, decreaseAmountInCart, removeProduct } = useCartStore()

    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);


    const plusQuantity = (prod) => {
        //console.log(prod)
        addAmountInCart(prod);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: '# of products in cart increased', life: 3000 });
    }

    const minusQuantity = (prod) => {
        if(prod.amountInCart === 1) {
            removeProduct(prod);
        } else {
            decreaseAmountInCart(prod);
        }
        toast.current.show({ severity: 'success', summary: 'Successful', detail: '# of products in cart reduced', life: 3000 });

    }

    const deleteItem = () => {
        console.log(product);
        removeProduct(product);
        setDeleteProductDialog(false);
        setProduct(emptyProduct)
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product removed from cart.', life: 3000 });
    }

    const deleteMultipleItems = () => {
        //console.log(selectedProducts);
        selectedProducts.forEach(prod => {
            removeProduct(prod);
        });
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products removed form cart', life: 3000 });
        

    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

   
    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }


    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }
    

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        
    }


    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
              <Button><Link href='/checkout'>Checkout</Link></Button>
            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        return <img style={{objectFit: 'contain'}} src={rowData.image} height={150} width={150} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.name} className="product-image" />
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon='pi pi-minus' className='p-button-rounded' onClick={() => minusQuantity(rowData)}  ></Button>
                <Button icon='pi pi-plus' className='p-button-rounded' onClick={() => plusQuantity(rowData)}   ></Button>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Manage Cart</h5>
        </div>
    );
 
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteItem} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteMultipleItems} />
        </React.Fragment>
    );

    return (
        <div >
            <Toast ref={toast} />
            <div style={{border: 'solid grey 5px', borderRadius: '16px'}}>
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} size='small' selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value) }
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} header={header} responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="name" header="Name" style={{ minWidth: '7rem' }}></Column>
                    <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                    <Column field="category" header="Category" style={{ minWidth: '10rem' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field='amountInCart' header='# in Cart'></Column>
                    <Column body={actionBodyTemplate} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>


            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Remove <b>{product.name}</b> from your cart?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Remove the selected items from your cart?</span>}
                </div>
            </Dialog>
        </div>
    );
}

export default CartTable
                 