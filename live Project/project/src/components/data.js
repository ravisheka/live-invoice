export const data={
    "from": {
      "name": "Company name",
      "address": "Company address",
    },
    "to": {
      "name": "Company name",
      "address": "Company address",
    },
    "issueDate": "new Date()",
    "dueDate": "new Date()",
    "fineAmt": "fine applied to invoice in case of late payment",
    "invoiceItems": [
      {
        "desc": "DOCUMENT ID OF PRODUCT | string",
        "rate": "PRICE OF PRODUCT FROM IT'S DOCUMENT | number",
        "qty": "QUANTITY OF PRODUCT | number",
        "taxAmt": "PRODUCT'S TAX BRACKET",
        "finalAmt": "ITEM'S PRICE X QUANTITY | number"
      }
    ],
    "subTotal": "TOTAL INVOICE AMOUNT WITHOUT TAXES | number",
    "adjustmentAmt": "EXTRA ADJUSTMENT MADE TO INVOICE | number",
    "totalAmt": "FINAL INVOICE AMT | number",
  }