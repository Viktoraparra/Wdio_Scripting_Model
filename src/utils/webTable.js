// class WebTable{
//     public table

//     constructor(tableLocartor){
//         this.table = $(`${tableLocartor}`)
//     }

//     get AllRows(){
//         return await this.table.$$('tbody tr')
//     }

//     get RowsCount(){
//         return await this.table.$$('tbody tr').length();
//     }

//     get elementText(column){
//         let el = await this.table.$(`td:nth-child(${column}`)
//         return  el.length();
//     }

//     get elementText(row, column){
//         let el = await this.table.$(`tbody tr:nth-child(${row} td:nth-child(${column}`)
//         return  el.getText();
//     }

//      get ClickOnCell(row, column){
//         let el = await this.table.$(`tbody tr:nth-child(${row} td:nth-child(${column}`)
//         return el.click();
//     }
// }
// export default new WebTable();
