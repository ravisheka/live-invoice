import React from 'react'
import { data } from './components/data'
function App() {
 
  return (
    <>
      <section>
        <div
          className="my-5 page"
          size="A4"
          style={{ width: "60%", height: "90%" }}
        >
        
          <div className="p-5">
            <section className="top-content bb d-flex justify-content-between">
              <div className="logo">
                <img
                  src="https://dashboard.invoice.ng/dboard/img/logo.png"
                  alt=""
                  className="img-fluid"
                  
                />
              </div>
              <div className="top-left">
                <div className="graphic-path">
                  <p>Invoice</p>
                </div>
                <div className="position-relative">
                  <p>
                    Invoice No. <span>XXXX</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="store-user mt-5" >
              <div className="col-13" >
                <div className="row bb pb-3">
                  <div className="col-7">
                  
                    <p>From,</p>
                   <p>Company name</p>
                    <p className="address">
                     Company address
                    </p>
                    <div className="txn mt-2">GSTN: XXXXXXX</div>
                  </div>
                  <div className="col-5 ml-15 ">
                    <p>To,</p>
                    <p>Company name</p>
                    <p className="address">
                    Company address
                    </p>
                    <div className="txn mt-2">GSTN: XXXXXXX</div>
                  </div>
                </div>
                <div className="row extra-info pt-3">
                  <div className="col-7">
                    
                  </div>
                  <div className="col-5">
                    <p>
                      Deliver Date: <span>10-04-2021</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="product-area mt-4">
              <table className="table ">
                <thead>
                  <tr>
                    <td>Item Description</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="media-body">
                          <p className="mt-0 title">Media heading</p>
                          Cras sit amet nibh libero, in gravida nulla.
                        </div>
                      </div>
                    </td>
                    <td>200$</td>
                    <td>1</td>
                    <td>200$</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div className="media-body">
                          <p className="mt-0 title">Media heading</p>
                          Cras sit amet nibh libero, in gravida nulla.
                        </div>
                      </div>
                    </td>
                    <td>300$</td>
                    <td>2</td>
                    <td>600$</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="balance-info">
              <div class="row">
                <div class="col-8"></div>
                <div className="col-4">
                  <table className="table border-0 table-hover">
                    <tr>
                      <td>Sub Total:</td>
                      <td>800$</td>
                    </tr>
                    <tr>
                      <td>Total Tax Applied:</td>
                      <td>15$</td>
                    </tr>
                    <tr>
                      <td>Addjustment:</td>
                      <td>10$</td>
                    </tr>
                    <tfoot>
                      <tr>
                        <td>Grand Total:</td>
                        <td>825$</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div
          className="my-5 page"
          size="A4"
          style={{ width: "60%", height: "90%" }}
        >                                                                     
        ravi

         
        </div>
       </section>
    </>
         
  )
}

export default App
