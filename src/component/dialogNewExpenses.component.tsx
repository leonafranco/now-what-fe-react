import {
    Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./dialogNewExpenses.component.css";


export function DialogNewExpenses(props: {
  active: boolean;
  onClose: () => void;
}) {


  const [category, setCategory] = useState("Geral");
  const [expensesName, setExpensesName] = useState("");
  const [amount, setAmount] = useState("");

  const handleClose = () => {
    props.onClose();
  };

  const sendData = () => {
    fetch("http://localhost:8088/orders", {
      method: "POST",
      body: JSON.stringify({
        name: expensesName,
        amount: amount,
        category: category
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const handleChangeAmount = (event: any) => {
    setAmount(event.target.value);
  };
  const handleChangeExpensesName = (event: any) => {
    setExpensesName(event.target.value);
  };

  console.log(expensesName)

  return (
    <Dialog open={props.active} onClose={handleClose}>
      <DialogTitle>New Expense</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Expenses name"
            variant="standard"
            className="textFormField"
            onChange={handleChangeExpensesName}
          />
          <Input
            id="standard-adornment-amount"
            onChange={handleChangeAmount}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            className="textFormField"
          />
          </FormControl>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="categorySelector-label"
            id="categorySelector"
            value={category}
            label="Category"
            onChange={handleChangeCategory}
          >
            <MenuItem value={"Compras"}>Compras</MenuItem>
            <MenuItem value={"Resturante"}>Restaurante</MenuItem>
            <MenuItem value={"Geral"}>Geral</MenuItem>
          </Select>
          </FormControl>
          <Button variant="contained"onClick={sendData}>Guardar</Button>
          <Button variant="outlined"onClick={handleClose}>Cancelar</Button>
      </DialogContent>
    </Dialog>
  );
}
