//! BẢN THỬ NGHIỆM
const express = require('express')

const barcodeScanner = express()

//* đặt cổng port - nơi nodejs sẽ tạo server ở đấy
const port = 21134

//* tạo 1 kho dữ liệu mô phỏng
barcodeList = [
    {   
        code: "21134001",
        type: 'ean8'
    },
    {
        code : '21134002',
        type: 'ean8'
    },
    {
        code : "21134003",
        type : 'ean8'
    }
]


// DONE 
barcodeScanner.listen(port, () => {   
    console.log(`http://192.168.1.5:${port}/barcodeStorage/`)
})
// DONE 
barcodeScanner.get('/barcodeStorage', (req,res) => {
    return res.json(barcodeList)
})
barcodeScanner.get('/barcodeStorage/:code', (req,res) => {
    
    codeId = +req.params.code    
    let index = barcodeList.findIndex(code => code.code == codeId)
    if (index !== -1 ) {
    return res.json(barcodeList[index])
    } else {
        return res.status(404).json({message:'Item not found'})
    }
})
barcodeScanner.get('/barcodeStorage/:code/type', (req,res) => {
    
    codeId = +req.params.code    
    let index = barcodeList.findIndex(code => code.code == codeId)
    if (index !== -1 ) {
        return res.json(barcodeList[index].type)
    } else {
        return res.status(404).json({message:'Item not found'})
    }
})
