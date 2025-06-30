"use client"
import React, { useState } from "react";
import { Input, Button, Select, Card, Typography, Divider, message } from "antd";
import { MoneyCollectOutlined, CalculatorOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

function Calculator() {
  const [categoryPrice, setCategoryPrice] = useState(0);
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);

  const totalPrice = (price, categoryPrice) => {
    return (price * 12.1) + categoryPrice;
  };

  const handleCalculate = () => {
    if (price === "" || isNaN(price)) {
      message.error("Пожалуйста, введите корректную цену.");
      return;
    }
    setResult(`${totalPrice(Number(price), categoryPrice).toFixed(2)} ₽`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 80 }}>
      <Card
        style={{ width: 350, borderRadius: 16, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        bodyStyle={{ padding: 24 }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <CalculatorOutlined style={{ fontSize: 36, color: "#1BE8F7" }} />
          <Title level={3} style={{ margin: 0, marginTop: 8 }}>
            Калькулятор
          </Title>
          <Divider />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Select
            placeholder="Выберите товар"
            onChange={(value) => setCategoryPrice(Number(value))}
            size="large"
          >
            <Option value="1050">Кроссовки</Option>
            <Option value="275">Футболка</Option>
            <Option value="550">Штаны / Джинсы</Option>
            <Option value="600">Худи / Кофта</Option>
            <Option value="1000">Пуховик / Куртка</Option>
          </Select>

          <Input
            size="large"
            type="number"
            prefix={<MoneyCollectOutlined /> }
            placeholder="Цена товара Юанях"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button
            type="primary"
            size="large"
            onClick={handleCalculate}
            style={{ background: "#1BE8F7", borderRadius: 8 }}
            block
          >
            Посчитать
          </Button>

          {result !== null && (
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <Text strong style={{ fontSize: 18 }}>
                Итоговая цена:
              </Text>
              <div style={{ fontSize: 22, color: "#13C2C2", marginTop: 4 }}>{result}</div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Calculator;