import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

export default function ViewBooking() {
  return (
    <div> List of bookings for the day
            <Container fluid>
                <Row>

                    <Col>
                        
                        <div>
                            <Table className="text-center table table-striped" >
                                <thead>
                                    <tr>
                                        <th>Client Name</th>
                                        <th>Client Email</th>
                                        <th>Appointment Date</th>
                                        <th>Appointment Time</th>
                                        <th>Client phone number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map(
                                            product =>
                                                <tr key={product.productId}>
                                                    <td ><img src={product.imageUrl} style={{ width: "200px", height: "150px" }} className="rounded mx-auto d-block" alt="product image"></img>
                                                    </td>
                                                    <td className="text-break text-break text-center text-wrap">{product.productName}</td>
                                                    <td className="text-break text-break text-center text-wrap">{product.price}</td>
                                                    <td className="text-break text-break text-center text-wrap">{product.quantity}</td>
                                                    <td className="text-break text-break text-center text-wrap">{product.description}</td>
                                                    
                                                    <td>
                                                        <button style={{ marginLeft: "10px", marginTop: "10px" }} className="btn btn-info" onClick={() => this.editProduct(product.productId)}>Update</button>
                                                        <button style={{ marginLeft: "10px", marginTop: "10px", width: "78px" }} onClick={() => this.deleteProduct(product.productId)} className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
  )
}
