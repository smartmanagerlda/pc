const addProduto = document.getElementById('maisProduto');
const servicoCotacao = document.getElementById('servicoCotacao');
const removProduto = document.getElementById('removProduto');
const cansCompra = document.getElementById('cansCompra');
const finalCompra = document.getElementById('finalCompra');
const finalCotacao = document.getElementById('finalCotacao');
const confirmarCompra = document.getElementById('confProduto');
const maisProduto = document.getElementById('addProduto');
const maisProdutoCaixa = document.getElementById('maisProdutoCaixa');
const codigo = document.getElementById('codigo');
const nomeClienteCaixa = document.getElementById('nomeClienteCaixa');
const rrNome = document.getElementById('rrNome');
const quantidade = document.getElementById('quantidade');
const quantStock = document.getElementById('quantStock');
const codStock = document.getElementById('codStock');
const discStock = document.getElementById('discStock');
const discpStock = document.getElementById('discpStock');
const ivaStock = document.getElementById('ivaStock');
const precounStock = document.getElementById('precounStock');
const precotStock = document.getElementById('precotStock');
const stockTotal11 = document.getElementById('stockTotal11');
const rrProduto = document.getElementById('rrProduto');
const cod1 = document.getElementById('cod1');
const produto1 = document.getElementById('produto1');
// const hora = document.getElementById('hora');
const token = localStorage.getItem('token');
const qant1 = document.getElementById('qant1');
const disc1 = document.getElementById('disc1');
const vendaDiaria = document.getElementById('vendaDiaria');
const un1 = document.getElementById('preço/un1');
const stockTotal = document.getElementById('stockTotal');
const fecharRecibo = document.getElementById('fecharRecibo');
const fecharCotacao = document.getElementById('fecharCotacao');
const nomeClienteCotacao = document.getElementById('nomeClienteCotacao');
const listaTotal = document.querySelector('.lista');
const recibo23 = document.querySelector('.recibo23');
let recibo23F = '';
let recibo23F1 = '';
let output = '';
let outputRec = '';
let fiura = '';
let nomeClienteCotacao2 = '';
let clienteNomeCaixa2 = '';
const empresa = localStorage.getItem('empresa');
const usuario23 = localStorage.getItem('usuario');
const data = [];
const produtosSugestao = [];
const reciboVolatel = [];
let totalRec = 0;
let vDiario = 0;

const empresaNUIT = localStorage.getItem('empresaNUITa');
const bancoNIB = localStorage.getItem('bancoNIBa');
const avenidaLocalizacao = localStorage.getItem('avenidaLocalizacaoa');

const nomeEpresa23id = document.getElementById('nomeEpresa23');
const nomeEpresa233id = document.getElementById('nomeEpresa233');
const avenidaLocalizacaoid = document.getElementById('avenidaLocalizacao23');
const bancoNIBid = document.getElementById('bancoNIB23');
const empresaNUITid = document.getElementById('empresaNUIT23');

const sairCaixa = document.getElementById('sairCaixa');

const nomeEpresa233id2 = document.getElementById('nomeEpresa243');
const avenidaLocalizacaoid2 = document.getElementById('avenidaLocalizacao243');
const bancoNIBid2 = document.getElementById('bancoNIB243');
const empresaNUITid2 = document.getElementById('empresaNUIT243');

const nomeEpresa233id21 = document.getElementById('nomeEpresa243a');
const avenidaLocalizacaoid21 = document.getElementById('avenidaLocalizacao243a');
const bancoNIBid21 = document.getElementById('bancoNIB243a');
const empresaNUITid21 = document.getElementById('empresaNUIT243a');
const nomeClienteCot = document.getElementById('nomeClienteCot');
const searchInput = document.querySelector('.search-input');

nomeEpresa23id.innerHTML = empresa;
nomeEpresa233id.innerHTML = empresa;
avenidaLocalizacaoid.innerHTML = avenidaLocalizacao;
bancoNIBid.innerHTML = bancoNIB;
empresaNUITid.innerHTML = empresaNUIT;

nomeEpresa233id2.innerHTML = empresa;
avenidaLocalizacaoid2.innerHTML = avenidaLocalizacao;
bancoNIBid2.innerHTML = bancoNIB;
empresaNUITid2.innerHTML = empresaNUIT;

nomeEpresa233id21.innerHTML = empresa;
avenidaLocalizacaoid21.innerHTML = avenidaLocalizacao;
bancoNIBid21.innerHTML = bancoNIB;
empresaNUITid21.innerHTML = empresaNUIT;
console.log(token)

let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// import { jsPDF } from "jspdf";
// Data
const empresa2 = localStorage.getItem('empresa');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
fetch(url3)
    .then(res => res.json())
    .then(content => {

        for (let i = 0; i < content[0]['categoria'].length; i++) {
            for (let j = 0; j < content[0]['categoria'][i]['stock'].length; j++) {
                produtosSugestao.push({ produto: content[0]['categoria'][i]['stock'][j]['nomeProduto'] })
            }
        }

    })

const painelSugestao = document.querySelector('.suggestions');
searchInput.addEventListener('keyup', function () {
    const input = searchInput.value;
    painelSugestao.innerHTML = '';
    const sugestoes = produtosSugestao.filter(function (produtos) {
        return produtos.produto.toLowerCase().startsWith(input);
    })
    sugestoes.forEach(function (sugerido) {
        const div11 = document.createElement('div');
        div11.innerHTML = sugerido.produto;
        painelSugestao.appendChild(div11);
    })
    if (input === '') {
        painelSugestao.innerHTML = '';
    }
});
painelSugestao.addEventListener('click', function (e) {
    console.log(e.target.innerHTML)
    codigo.value = e.target.innerHTML;
    painelSugestao.innerHTML = '';
});
function greet() {
    let currentTimeDate = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunda-Feira";
    weekday[2] = "Terça-Feira";
    weekday[3] = "Quarta-Feira";
    weekday[4] = "Quinta-Feira";
    weekday[5] = "Sexta-Feira";
    weekday[6] = "Sábado";

    var month = new Array();
    month[0] = "Jan";
    month[1] = "Fev";
    month[2] = "Mar";
    month[3] = "Abr";
    month[4] = "Mio";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Ago";
    month[8] = "Set";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dez";


    var currentDay = weekday[currentTimeDate.getDay()];
    var currentDate = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();
    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;
    var hours = currentTimeDate.getHours();
    var minutes = currentTimeDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var AMPM = hours >= 12 ? ' da Tarde' : ' da Manhã';
    if (hours === 12) {
        hours = 12;

    } else {

        hours = hours % 12;

    }
    var currentTime = `${hours}:${minutes}${AMPM}`;
    document.getElementById("hora").innerHTML = currentTime;
    document.getElementById("day").innerHTML = currentDay;
    document.getElementById("date").innerHTML = fullDate;
    document.getElementById("data23").innerHTML = fullDate;
    document.getElementById("data23a").innerHTML = fullDate;
    document.getElementById("operador23e").innerHTML = usuario23;
    document.getElementById("operador23ea").innerHTML = usuario23;
}
setInterval(greet, 1000);

// Fim Data
const reciboF = document.querySelector('.recibo')
const reciboF2 = document.querySelector('.recibo24')
const reciboF21 = document.querySelector('.recibo241')
document.getElementById("total").innerHTML = currencyFormat(totalRec) + " Mt";
vendaDiaria.innerHTML = "Vendido: " + currencyFormat(vDiario) + " Mt";

confirmarCompra.addEventListener('click', (e) => {
    e.preventDefault();
    fiura = '';
    document.querySelector(".figure").innerHTML = fiura;
    confirmarCompra.disabled = true;
    finalCompra.disabled = false;
    finalCotacao.disabled = false;
    addProduto.disabled = false;
    removProduto.disabled = false;
    // cansCompra.disabled = true;

    reciboVolatel.forEach(rec => {
        totalRec += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock));


        outputRec += `
        <div class="container-fluid text-black">       
                                    <div class="row">
                                        <div class="col-md">
                                            <h6 id="Produto">${rec[0].nomeProduto}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6 id="Qant">${rec[0].pqty}</h6>
                                        </div>
                                        <div class="col-md">
                                            <h6 id="Preço/Un">${rec[0].precounStock}</h6>                    
                                        </div>                                    
                                    </div>
                                </div>`;
    })
    reciboF.innerHTML = outputRec;
    const totalIva23F = parseInt(totalRec) * 0.17
    const totalRecF = parseFloat(totalIva23F) + parseFloat(totalRec)
    document.getElementById("total").innerHTML = currencyFormat(totalRecF) + " Mt";

});
maisProdutoCaixa.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("alertaSucesso").innerHTML = '';
    const pcode = nomeClienteCaixa.value;
    if (pcode == '') {
        $('#exampleModalServicosCotacoes').modal('hide');
        document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-danger" role="alert">
                            <div class="text-center">
                                <h6>O Nome do Cliente em Branco</h6>
                            </div> 
        </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
    else {
        const empresa2 = localStorage.getItem('empresa');
        const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2}`;
        fetch(url3)
            .then(res => res.json())
            .then(content => {
                console.log(content[0]['mercado']);
                if (content[0]['mercado'].length === 0) {
                    document.getElementById("alertaSucesso").innerHTML = '';
                    $('#exampleModalServicosCotacoes').modal('hide'); //hide modal
                    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-warning" role="alert">
                                    <div class="text-center">
                                        <h6>Cliente não encontrado..</h6>
                                    </div> 
                </div>`
                        ;
                    setTimeout(function () {
                        document.getElementById("alertaSucesso").innerHTML = '';
                    }, 4000);
                } else {

                    $('#exampleModalServicosCotacoes').modal('hide'); //hide modal
                    for (var i = 0; i < content[0]['mercado'].length; i++) {
                        let clienteNomeCaixa = content[0]['mercado'][i]['nomeCliente']
                        console.log(clienteNomeCaixa);
                        if (clienteNomeCaixa == nomeClienteCaixa.value) {
                            let precoProduto = content[0]['mercado'][i]['preco'];
                            let totalp = parseInt(content[0]['mercado'][i]['quantidade']);
                            let discStock2 = "0.00";
                            let discpStock2 = "0.00";
                            let ivaStock2 = "17%";
                            let imgProduto2 = content[0]['mercado'][i]['img'];
                            let codigoProduto = 'P/S';
                            output = '';
                            outputRec = '';

                            fiura = `
                        <div class="col-md-4 col-sm-4">
                            <div class="thumbnail">
                                <img src="${imgProduto2}"
                                class="img-responsive" id="Myimg" style="min-height:100px; width:100px;">
                            </div>
                        </div>`;
                            document.querySelector(".figure").innerHTML = fiura;
                            quantStock.value = content[0]['mercado'][i]['quantidade'];
                            codStock.value = 'P/S';
                            discStock.value = discStock2;
                            discpStock.value = discpStock2;
                            ivaStock.value = ivaStock2;
                            precounStock.value = precoProduto;
                            precotStock.value = parseInt(content[0]['mercado'][i]['quantidade']) * parseInt(content[0]['mercado'][i]['preco']);
                            const arrayProduto = [
                                {
                                    "quantStock": `${content[0]['mercado'][i]['quantidade']}`,
                                    "nomeProduto": `${content[0]['mercado'][i]['nomeProduto']}`,
                                    "codStock": `${codigoProduto}`,
                                    "precounStock": `${precoProduto}`,
                                    "precotStock": `${parseInt(content[0]['mercado'][i]['quantidade']) * parseInt(content[0]['mercado'][i]['preco'])}`,
                                    "discStock": `${discStock.value}`,
                                    "discpStock": `${discpStock.value}`,
                                    "ivaStock": `${ivaStock.value}`,
                                    "quantidadeProduto": `${content[0]['mercado'][i]['quantidade']}`,
                                    "imgg": `${imgProduto2}`,
                                    "pqty": `${totalp}`
                                }
                            ];
                            reciboVolatel.push(arrayProduto);
                            data.push(arrayProduto);
                            confirmarCompra.disabled = false;
                            addProduto.disabled = true;
                            removProduto.disabled = true;
                            cansCompra.disabled = false;
                            finalCompra.disabled = true;

                        } else {
                            document.getElementById("alertaSucesso").innerHTML = '';
                            $('#exampleModalServicosCotacoes').modal('hide'); //hide modal
                            document.getElementById("alertaSucesso").innerHTML = `
                        <div class="alert alert-info" role="alert">
                                            <div class="text-center">
                                                <h6>Produto seleccionado...</h6>
                                            </div> 
                        </div>`
                                ;
                            setTimeout(function () {
                                document.getElementById("alertaSucesso").innerHTML = '';
                            }, 4000);
                        }
                    }
                    for (var i = 0; i < content[0]['mercado'].length; i++) {
                        let clienteNomeCaixa = content[0]['mercado'][i]['nomeCliente']
                        console.log(clienteNomeCaixa);
                        if (clienteNomeCaixa == nomeClienteCaixa.value) {
                            clienteNomeCaixa2 = nomeClienteCaixa.value;

                        }
                    }
                }

            })
    }

});
$('#myModal').modal('hide'); //hide modal
servicoCotacao.addEventListener('click', (e) => {
    e.preventDefault();
    $('#exampleModalServicosCotacoes').modal('show');
});
maisProduto.addEventListener('click', (e) => {
    e.preventDefault();
    const pcode = codigo.value;
    const pqty = quantidade.value;

    document.getElementById("alertaSucesso").innerHTML = '';
    if (pcode == '' || pqty == '') {
        $('#exampleModalCenter').modal('hide'); //hide modal
        document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-danger" role="alert">
                            <div class="text-center">
                                <h6>O Nome do Produto e/ou Quandiade em Falta</h6>
                            </div> 
        </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
    else {
        const url = `https://stocksmanager1.herokuapp.com/stocksEmpresa3/${codigo.value}/${empresa}`;
        fetch(url)
            .then(res => res.json())
            .then(content => {
                console.log(content['result'][0]);
                if (content.result.length === 0) {
                    document.getElementById("alertaSucesso").innerHTML = '';
                    console.log('Produto nao encontrado..');
                    console.log(codigo.value)
                    console.log(empresa)
                    $('#exampleModalCenter').modal('hide'); //hide modal
                    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-warning" role="alert">
                                    <div class="text-center">
                                        <h6>Produto nao encontrado...</h6>
                                    </div> 
                </div>`
                        ;
                    setTimeout(function () {
                        document.getElementById("alertaSucesso").innerHTML = '';
                    }, 4000);
                } else {

                    const produtos = content['result'][0]['list'][0]['stock'];
                    console.log(content['result'][0]['list'][0]['stock'].length);
                    $('#exampleModalCenter').modal('hide'); //hide modal

                    for (let i = 0; i < produtos.length; i++) {
                        console.log("Lucas" + produtos.length);
                        const categoriaProduto = content['result'][0]['list'][0]['nomeCategoria'];
                        const nomeProduto = content['result'][0]['list'][0]['stock'][i]['nomeProduto'];
                        const codigoProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['codigo'];
                        const imgProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['img'];
                        const precoProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['precoVenda'];
                        const quantidadeProduto = content['result'][0]['list'][0]['stock'][i]['produto'][0]['quantidade'];
                        const totalp = pqty * precoProduto;
                        const discStock2 = "0.00";
                        const discpStock2 = "0.00";
                        const ivaStock2 = "17%";

                        if (nomeProduto == codigo.value) {
                            output = '';
                            outputRec = '';

                            fiura = `
                                <div class="col-md-4 col-sm-4">
                                    <div class="thumbnail">
                                        <img src="${imgProduto}"
                                        class="img-responsive" id="Myimg" style="min-height:100px; width:100px;">
                                    </div>
                                </div>`;
                            document.querySelector(".figure").innerHTML = fiura;
                            console.log('ok')
                            quantStock.value = quantidade.value;
                            codStock.value = codigoProduto;
                            discStock.value = discStock2;
                            discpStock.value = discpStock2;
                            ivaStock.value = ivaStock2;
                            precounStock.value = precoProduto;
                            precotStock.value = totalp;
                            stockTotal11.value = quantidadeProduto;
                            const arrayProduto = [
                                {
                                    "quantStock": `${quantidade.value}`,
                                    "nomeProduto": `${nomeProduto}`,
                                    "categoriaProduto": `${categoriaProduto}`,
                                    "codStock": `${codigoProduto}`,
                                    "precounStock": `${precoProduto}`,
                                    "precotStock": `${totalp}`,
                                    "discStock": `${discStock.value}`,
                                    "discpStock": `${discpStock.value}`,
                                    "ivaStock": `${ivaStock.value}`,
                                    "quantidadeProduto": `${quantidadeProduto}`,
                                    "pqty": `${pqty}`,
                                    "imgg": `${imgProduto}`,
                                }
                            ];
                            reciboVolatel.push(arrayProduto);
                            data.push(arrayProduto);
                            confirmarCompra.disabled = false;
                            addProduto.disabled = true;
                            removProduto.disabled = true;
                            cansCompra.disabled = false;
                            finalCompra.disabled = true;

                        }
                    }
                }

            })
    }

});

finalCompra.addEventListener('click', (e) => {
    e.preventDefault();
    recibo23F1 = "";
    recibo23F = "";
    reciboVolatel.forEach(rec => {
        recibo23F1 += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <h6>${rec[0].codStock}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].nomeProduto}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].pqty}</h6>
                                        </div>
                                        <div class="col-md">
                                            <h6>${(rec[0].precounStock) + ".00"}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>NA</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].discpStock}</h6>                    
                                        </div> 
                                        <div class="col-md">
                                            <h6>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</h6>                    
                                        </div>                                   
                                    </div>
                                    <hr style="border-top: dotted 1px;" /> 
                                </div>`;
        recibo23F += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <h6>${rec[0].codStock}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].nomeProduto}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].pqty}</h6>
                                        </div>
                                        <div class="col-md">
                                            <h6>${(rec[0].precounStock) + ".00"}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>NA</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].discpStock}</h6>                    
                                        </div> 
                                        <div class="col-md">
                                            <h6>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</h6>                    
                                        </div>                                   
                                    </div>
                                    <hr style="border-top: dotted 1px;" /> 
                                </div>`;
    })
    const totalIva23F = parseInt(totalRec) * 0.17
    const totalRecF = parseFloat(totalIva23F) + parseFloat(totalRec)
    document.getElementById("total23").innerHTML = currencyFormat(totalRecF) + " Mt";
    document.getElementById("totalDesc23").innerHTML = discpStock.value;
    document.getElementById("totalsemIva23").innerHTML = currencyFormat(parseInt(totalRec)) + " Mt";
    document.getElementById("totalIva23").innerHTML = currencyFormat(parseFloat(totalIva23F)) + " Mt";
    reciboF2.innerHTML = recibo23F1;
    $('#exampleModalCenter4').modal('show'); //open modal

});

finalCotacao.addEventListener('click', (e) => {
    e.preventDefault();
    $('#exampleModalServicosCotacoes2').modal('show');
});

sairCaixa.addEventListener('click', (e) => {
    e.preventDefault();
    var m = new Date();
    var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
    const usuarioLogs = localStorage.getItem('usuario');
    const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
    let logs = new Request(urlLogs, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "nomeFuncionario": `${usuarioLogs}`,
            "historico": `O Colaborador ${usuarioLogs} fechou o Caixa`,
            "data": `${dateString}`
        })
    });
    fetch(logs)
        .then(ress => ress.json())
        .then(data5Logs => {
            console.log(data5Logs)
            const urlLogs1 = 'https://stocksmanager1.herokuapp.com/logsVendas';
            let logs1 = new Request(urlLogs1, {
                method: 'PATCH',
                headers: h,
                body: JSON.stringify({
                    "nomeFuncionario": `${usuarioLogs}`,
                    "historico": `O Colaborador ${usuarioLogs} Vendeu ${currencyFormat(vDiario)} Mt`,
                    "data": `${dateString}`
                })
            });
            fetch(logs1)
                .then(ress1 => ress1.json())
                .then(data5Logs1 => {
                    console.log(data5Logs1)
                    window.location = 'login.html';
                });
        });
});

cansCompra.addEventListener('click', (e) => {
    e.preventDefault();
    reciboVolatel.length = 0;
    data.length = 0;
    totalRec = 0;
    document.getElementById("total").innerHTML = totalRec + ",00 Mt";
    outputRec = '';
    reciboF.innerHTML = outputRec;
    document.querySelector(".figure").innerHTML = '';
    removProduto.disabled = true;
    cansCompra.disabled = true;
    confirmarCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-info" role="alert">
                                    <div class="text-center">
                                        <h6>Compra cancelada com sucesso!!!</h6>
                                    </div> 
                </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);
});
rrProduto.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(data[0]);
    let estado = 'off';
    let valor = 0;
    $('#exampleModalCenter1').modal('hide'); //hide modal
    let removerNome = rrNome.value;
    for (var i = 0; i < data[0].length; i++) {

        if (data[0][i]['nomeProduto'] == removerNome) {

            console.log('ok');
            valor = i;
            estado = 'on';

            // i--; 
        }
    }
    if (estado === 'on') {
        estado = 'off';
        if (reciboVolatel.length == 0) {
            removProduto.disabled = true;
            cansCompra.disabled = true;
            finalCompra.disabled = true;
            data.length = 0;
            totalRec = 0;
            document.getElementById("total").innerHTML = totalRec + ",00 Mt";
            outputRec = '';
            reciboF.innerHTML = outputRec;
            document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Todos os Produtos foram removidos!!!</h6>
                                </div> 
            </div>`
                ;
            setTimeout(function () {
                document.getElementById("alertaSucesso").innerHTML = '';
            }, 4000);

        } else {
            outputRec = '';
            data.splice(valor, 1);
            reciboVolatel.splice(valor, 1);
            reciboVolatel.forEach(rec => {
                console.log(rec)
                outputRec += `
                <div class="container-fluid text-black">       
                                            <div class="row">
                                                <div class="col-md">
                                                    <h6 id="Produto">${rec[0].nomeProduto}</h6>                    
                                                </div>
                                                <div class="col-md">
                                                    <h6 id="Qant">${rec[0].pqty}</h6>
                                                </div>
                                                <div class="col-md">
                                                    <h6 id="Preço/Un">${rec[0].precounStock}</h6>                    
                                                </div>                                    
                                            </div>
                                        </div>`;
            })
            reciboF.innerHTML = outputRec;
            document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Produto removido com sucesso!!!</h6>
                                </div> 
            </div>`
                ;
            setTimeout(function () {
                document.getElementById("alertaSucesso").innerHTML = '';
            }, 4000);
        }


    }
    else {
        document.getElementById("alertaSucesso").innerHTML = `
                <div class="alert alert-info" role="alert">
                                    <div class="text-center">
                                        <h6>Nome do produto nao encontrado na lista actual!!!</h6>
                                    </div> 
                </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
    }
});
fecharRecibo.addEventListener('click', (e) => {
    e.preventDefault();
    // html2pdf()
    // .from(recibo23)
    // .save();
    removProduto.disabled = true;
    cansCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    finalCotacao.disabled = true;

    totalRec = 0;
    vDiario = 0;
    outputRec = '';
    const previw = '';
    recibo23F1 = '';
    reciboVolatel.length = 0;
    document.getElementById("total").innerHTML = totalRec + " Mt";
    const urlLogIn311 = 'https://stocksmanager1.herokuapp.com/delete_mercado';
    let pora211a = new Request(urlLogIn311, {
        method: 'PATCH',
        headers: h,
        body: JSON.stringify({
            "nomeCliente": `${clienteNomeCaixa2}`
        })
    });

    fetch(pora211a)
        .then(ress => ress.json())
        .then(data5 => {
            console.log(clienteNomeCaixa2);
        })
    reciboF.innerHTML = outputRec;
    data.forEach(rec => {
        output += `
                        <div class="p-1 mb-2 mt-2 bg-gradient-primary text-white">
                            <div class="container-fluid text-black">       
                                <div class="row">
                                    <div class="col-md">
                                        <h6>${rec[0].codStock}</h6>                
                                    </div>
                                    <div class="col-md">
                                        <h6>${rec[0].nomeProduto}</h6>                    
                                    </div>
                                    <div class="col-md">
                                        <h6>${rec[0].pqty}</h6>
                                    </div>
                                    <div class="col-md">
                                        <h6>NA</h6>                
                                    </div>
                                    <div class="col-md">
                                        <h6>${(rec[0].precounStock) + ".00"}</h6>                    
                                    </div>
                                    <div class="col-md">
                                        <h6>${(rec[0].quantidadeProduto)}</h6>
                                    </div>
                                    <div class="col-md">
                                        <h6>${currencyFormat(parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17))}</h6>
                                    </div>
                                </div>
                            </div>      
                        </div>`;


        vDiario += parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock)) + parseFloat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))) * 0.17);
        const urlLogIn3a = 'https://stocksmanager1.herokuapp.com/recibo2Pequenas';
        let varQuari = parseInt(rec[0].quantidadeProduto) - parseInt(rec[0].pqty);
        let pora2a = new Request(urlLogIn3a, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": rec[0].pqty,
                "nome_produto": rec[0].nomeProduto,
                "precoVenda": rec[0].precounStock
            })
        });
        fetch(pora2a)
            .then(ress => ress.json())
            .then(data5 => {
            });

        const urlLogIn31 = 'https://stocksmanager1.herokuapp.com/addStockPequenasEmpresas2/quantidade';
        let pora21 = new Request(urlLogIn31, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": varQuari,
                "nomeProduto": rec[0].nomeProduto,
                "nomeCategoria": rec[0].categoriaProduto
            })
        });

        fetch(pora21)
            .then(ress => ress.json())
            .then(data5 => {
            });


    });
    listaTotal.innerHTML = output;
    vendaDiaria.innerHTML = "Vendido: " + currencyFormat(vDiario) + " Mt";
    data.length = 0;
    codigo.value = '';
    quantidade.value = '';

    previw = `
    <div class="col-md">
                        <input type="text" class="form-control" id="quantStock" placeholder="Quant">              
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="codStock" placeholder="Cod">                   
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="discStock" placeholder="Desc">
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="discpStock" placeholder="Desc%">               
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="ivaStock" placeholder="IVA">                     
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="precounStock" placeholder="Preço/Un"> 
                    </div>
                    <div class="col-md">
                        <input type="text" class="form-control" id="precotStock" placeholder="Preço T.">
                    </div>`;

    document.querySelector(".previw").innerHTML = previw;
    document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-primary" role="alert">
                            <div class="text-center">
                                <h6>Venda realizada com sucesso!!!</h6>
                            </div> 
        </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);

});
nomeClienteCotacao.addEventListener('click', (e) => {
    e.preventDefault();

    nomeClienteCotacao2 = document.getElementById("nomeClienteCotacao11a").value;
    nomeClienteCot.innerHTML = nomeClienteCotacao2;
    recibo23F1 = "";
    recibo23F = "";
    reciboVolatel.forEach(rec => {
        recibo23F1 += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <h6>${rec[0].codStock}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].nomeProduto}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].pqty}</h6>
                                        </div>
                                        <div class="col-md">
                                            <h6>${(rec[0].precounStock) + ".00"}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>NA</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].discpStock}</h6>                    
                                        </div> 
                                        <div class="col-md">
                                            <h6>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</h6>                    
                                        </div>                                   
                                    </div>
                                    <hr style="border-top: dotted 1px;" /> 
                                </div>`;
        recibo23F += `
        <div class="container-fluid text-black">
                                    <div class="row">
                                        <div class="col-md">
                                            <h6>${rec[0].codStock}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].nomeProduto}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].pqty}</h6>
                                        </div>
                                        <div class="col-md">
                                            <h6>${(rec[0].precounStock) + ".00"}</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>NA</h6>                    
                                        </div>
                                        <div class="col-md">
                                            <h6>${rec[0].discpStock}</h6>                    
                                        </div> 
                                        <div class="col-md">
                                            <h6>${currencyFormat((parseInt((rec[0].pqty)) * parseInt((rec[0].precounStock))))}</h6>                    
                                        </div>                                   
                                    </div>
                                    <hr style="border-top: dotted 1px;" /> 
                                </div>`;
    })
    const totalIva23F = parseInt(totalRec) * 0.17
    const totalRecF = parseFloat(totalIva23F) + parseFloat(totalRec)
    document.getElementById("total23a").innerHTML = currencyFormat(totalRecF) + " Mt";
    document.getElementById("totalDesc23a").innerHTML = discpStock.value;
    document.getElementById("totalsemIva23a").innerHTML = currencyFormat(parseInt(totalRec)) + " Mt";
    document.getElementById("totalIva23a").innerHTML = currencyFormat(parseFloat(totalIva23F)) + " Mt";
    reciboF21.innerHTML = recibo23F1;
    $('#exampleModalCenter5').modal('show'); //open modal
    $('#exampleModalServicosCotacoes2').modal('hide');

});
fecharCotacao.addEventListener('click', (e) => {
    e.preventDefault();
    removProduto.disabled = true;
    cansCompra.disabled = true;
    addProduto.disabled = false;
    finalCompra.disabled = true;
    finalCotacao.disabled = true;;
    data.forEach(rec => {
        const urlLogIn3a = 'https://stocksmanager1.herokuapp.com/mercado';
        let pora2a = new Request(urlLogIn3a, {
            method: 'PATCH',
            headers: h,
            body: JSON.stringify({
                "quantidade": rec[0].pqty,
                "nomeProduto": rec[0].nomeProduto,
                "preco": rec[0].precounStock,
                "img": rec[0].imgg,
                "idade": "",
                "nomeCliente": `${nomeClienteCotacao2}`,
            })
        });
        fetch(pora2a)
            .then(ress => ress.json())
            .then(data5 => {
            });
    });

    outputRec = '';
    reciboF.innerHTML = outputRec;
    reciboVolatel.length = 0;
    data.length = 0;
    codigo.value = '';
    quantidade.value = '';
    totalRec = 0;
    document.getElementById("total").innerHTML = currencyFormat(totalRec) + " Mt";
    document.getElementById("alertaSucesso").innerHTML = `
        <div class="alert alert-primary" role="alert">
                            <div class="text-center">
                                <h6>Cotação finalizada com sucesso!!!</h6>
                            </div> 
        </div>`
        ;
    setTimeout(function () {
        document.getElementById("alertaSucesso").innerHTML = '';
    }, 4000);
});