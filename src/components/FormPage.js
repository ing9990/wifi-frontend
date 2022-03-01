import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


function handleOnSubmit(e) {
    e.preventDefault()

    console.log(e.target.password.value)

    alert("Check")

    let data = {
        "wifi_name": e.target.wifiname.value,
        "wifi_password": e.target.password.value,
        "wifi_address": e.target.address.value
    }

    axios.post("http://localhost:8080/api/wifi",JSON.stringify(data),{
        headers:{
            "Content-Type": `application/json`,
        },

            })
        .then((res) => {
            console.log("전송 완료")
            console.log(data.name)
            console.log(data.password)
            console.log(data.address)
            console.log(res);
        })
}

function FormPage() {


    const [wifi,setWifi] = useState("")
    const [password,setPassword] = useState("")
    const [address,setAddress] = useState("")

    return (
        <div className="container">
            <fieldset>
                <div>
                    <Form onSubmit={handleOnSubmit}>
                        <fieldset>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>와이파이 이름</Form.Label>
                                <Form.Control name="wifiname" type="text" placeholder="Enter wifi name" value = {wifi} onChange={
                                    (e) => setWifi(e.target.value)
                                } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </fieldset>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control name="password" type="text" placeholder="Password" value = {password} onChange={
                                (e) => setPassword(e.target.value)
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>주소</Form.Label>
                            <Form.Control name="address" type="text" placeholder="주소" value = {address} onChange={
                                (e) => setAddress(e.target.value)
                            } />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            전송
                        </Button>
                    </Form>
                </div>
            </fieldset>
        </div>
    )

}

export default FormPage;