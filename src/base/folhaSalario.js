var funcionarioAlt = []
let diverso = '';
let diverso2 = '';
let colabora = '';
const myAltTab = document.getElementById('myAltTab');
const gerarSalarios = document.getElementById('gerarSalarios');
const empresa2q = localStorage.getItem('empresa');
const altFuncionariorLista = document.getElementById('altFuncionariorLista');
const modelTitle = document.getElementById('modelTitle');
const url3 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa2q}`;
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
            var d = new Date();
            var n = d.getMonth();

localStorage.setItem('mesStatus', 'false');
fetch(url3)
        .then(res => res.json())
        .then(content => {           
            const data = content[0]['salarios'];
            
            for (var i = 0; i < data.length; i++){
                const data2 = content[0]['salarios'][i]['meses'];
                for (var i1 = 0; i1 < data2.length; i1++){
                    const data3 = content[0]['salarios'][i]['meses'][i1]['colaborador'];
                    for (var i3 = 0; i3 < data3.length; i3++){
                       
                        var newRow = myAltTab.insertRow();
                        var newCell1 = newRow.insertCell(0);
                        var newCell2 = newRow.insertCell(1);
                        var newCell3 = newRow.insertCell(2);
                        var newCell4 = newRow.insertCell(3);
                        var newCell5 = newRow.insertCell(4);
                        var newCell6 = newRow.insertCell(5);
                        var newCell7 = newRow.insertCell(6);
                        newCell1.innerHTML = `<div>*</div>`;
                        newCell2.innerHTML = `<div class="ano">${content[0]['salarios'][i]['ano']}</div>`;
                        newCell3.innerHTML = `<div class="mes">${content[0]['salarios'][i]['meses'][i1]['mes']}</div>`;
                        newCell4.innerHTML = `<div class="nomeColaborador">${content[0]['salarios'][i]['meses'][i1]['colaborador'][i3]['nomeColaborador']}</div>`;
                        newCell5.innerHTML = `<div class="cargo">${content[0]['salarios'][i]['meses'][i1]['colaborador'][i3]['cargo']}</div>`;
                        newCell6.innerHTML = `<div class="salariHora">${ String(content[0]['salarios'][i]['meses'][i1]['colaborador'][i3]['salarioHora']).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>`;
                        newCell7.innerHTML = `<div class="salario">${ String(content[0]['salarios'][i]['meses'][i1]['colaborador'][i3]['salarioTotal']).replace(/(.)(?=(\d{3})+$)/g,'$1.')+",00 Mt"}</div>`;
                    }
                    
                }
                
            }

            $(document).ready(function () {
                $('#tabbb').DataTable({
                "scrollX": true,
                "scrollY": 500,
                });
            });
            let anoActual = new Date().getFullYear();
            console.log(content[0]['salarios']);
            let ctlNormal = 200;
            let ctlTurno = 100;
            let estagio = 150;
            let salarioTotal = 30;
            let sentenc = [];
            let meses = [];
            let esteMes = '';
            
            
            for (var i = 0; i < content[0]['salarios'].length; i++){
                sentenc.push(parseInt(content[0]['salarios'][i]['ano']));
                for (var i1 = 0; i1 < content[0]['salarios'][i]['meses'].length; i1++){
                    meses.push(content[0]['salarios'][i]['meses'][i1]['mes']);
                }
            }
            console.log(sentenc.includes(anoActual));
            console.log(meses.includes(monthNames[n]));
            console.log(monthNames[n]);
            console.log(meses);
            const mesStatus = parseInt(localStorage.getItem('mesStatus'));
            const mesProximo = parseInt(localStorage.getItem('mesProximo'));
            function sociedade() {
                
                if(sentenc.includes(anoActual)){
                    console.log('Ano Actual');
                    if(meses.includes(monthNames[n])){                        
                        // kkkkk
                        console.log('Criar Mes')
                        if(mesStatus == 'true'){
                            console.log('Este mes')                    
                            localStorage.setItem('mesStatus', 'false');
                            const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/salarioPequenas3';
                            for (var i = 0; i < content[0]['altFuncio'].length; i++){
                                let jornada = content[0]['altFuncio'][i+1]['jornada'];
                                if(jornada == "Estágio"){
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "ano": anoActual,
                                            "mes": monthNames[n],
                                            "nomeColaborador": content[0]['altFuncio'][i+1]['nomeColaborador'],
                                            "cargo": content[0]['altFuncio'][i+1]['cargo'],
                                            "salarioHora": estagio,
                                            "salarioTotal": salarioTotal * estagio,
                                            })                        
                                        });
                                                        
                                        fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            location.reload()
                                        }) 
                                }
                                if(jornada == "CLT normal"){
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "ano": anoActual,
                                            "mes": monthNames[n],
                                            "nomeColaborador": content[0]['altFuncio'][i+1]['nomeColaborador'],
                                            "cargo": content[0]['altFuncio'][i+1]['cargo'],
                                            "salarioHora": estagio,
                                            "salarioTotal": salarioTotal * estagio,
                                            })                        
                                        });
                                                        
                                        fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            location.reload()
                                        }) 
                                }
                                if(jornada == "CLT turno"){
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "ano": anoActual,
                                            "mes": monthNames[n],
                                            "nomeColaborador": content[0]['altFuncio'][i+1]['nomeColaborador'],
                                            "cargo": content[0]['altFuncio'][i+1]['cargo'],
                                            "salarioHora": estagio,
                                            "salarioTotal": salarioTotal * estagio,
                                            })                        
                                        });
                                                        
                                        fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            location.reload()
                                        }) 
                                }
                            }
                        }
                    }else{
                        console.log('Mes Proximo')
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/salarioPequenas2';
                        if(mesStatus == 'false'){
                            localStorage.setItem('mesStatus', 'true');
                                let jornada = content[0]['altFuncio'][0]['jornada'];
                                if(jornada == "Estágio"){
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "ano": anoActual,
                                            "mes": monthNames[n],
                                            "nomeColaborador": content[0]['altFuncio'][0]['nomeColaborador'],
                                            "cargo": content[0]['altFuncio'][0]['cargo'],
                                            "salarioHora": estagio,
                                            "salarioTotal": salarioTotal * estagio,
                                            })                        
                                        });
                                                        
                                        fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            location.reload();
                                            sociedade();
                                        }) 
                                }
                                if(jornada == "CLT normal"){
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "ano": anoActual,
                                            "mes": monthNames[n],
                                            "nomeColaborador": content[0]['altFuncio'][0]['nomeColaborador'],
                                            "cargo": content[0]['altFuncio'][0]['cargo'],
                                            "salarioHora": estagio,
                                            "salarioTotal": salarioTotal * estagio,
                                            })                        
                                        });
                                                        
                                        fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            location.reload();
                                            sociedade();
                                        }) 
                                }
                                if(jornada == "CLT turno"){
                                    let pora2 = new Request(urlLogIn3, {
                                        method: 'PATCH',
                                        headers: h,
                                        body: JSON.stringify({
                                            "ano": anoActual,
                                            "mes": monthNames[n],
                                            "nomeColaborador": content[0]['altFuncio'][0]['nomeColaborador'],
                                            "cargo": content[0]['altFuncio'][0]['cargo'],
                                            "salarioHora": estagio,
                                            "salarioTotal": salarioTotal * estagio,
                                            })                        
                                        });
                                                        
                                        fetch(pora2)
                                        .then(ress => ress.json())
                                        .then(data5 => {
                                            location.reload();
                                            sociedade();
                                        }) 
                                }
                           
                            
                        }
                       
                    }
                }else{
                    console.log('Ano Proximo')
                        let jornada = content[0]['altFuncio'][0]['jornada'];
                        const urlLogIn3 = 'https://stocksmanager1.herokuapp.com/salarioPequenasNovo';
                        if(jornada == "Estágio"){
                            let pora2 = new Request(urlLogIn3, {
                                method: 'PATCH',
                                headers: h,
                                body: JSON.stringify({
                                    "ano": anoActual,
                                    "mes": monthNames[n],
                                    "nomeColaborador": content[0]['altFuncio'][0]['nomeColaborador'],
                                    "cargo": content[0]['altFuncio'][0]['cargo'],
                                    "salarioHora": estagio,
                                    "salarioTotal": salarioTotal * estagio,
                                    })                        
                                });
                                                
                                fetch(pora2)
                                .then(ress => ress.json())
                                .then(data5 => {
                                    location.reload()
                                }) 
                        }
                        if(jornada == "CLT normal"){
                            let pora2 = new Request(urlLogIn3, {
                                method: 'PATCH',
                                headers: h,
                                body: JSON.stringify({
                                    "ano": anoActual,
                                    "mes": monthNames[n],
                                    "nomeColaborador": content[0]['altFuncio'][0]['nomeColaborador'],
                                    "cargo": content[0]['altFuncio'][0]['cargo'],
                                    "salarioHora": estagio,
                                    "salarioTotal": salarioTotal * estagio,
                                    })                        
                                });
                                                
                                fetch(pora2)
                                .then(ress => ress.json())
                                .then(data5 => {
                                }) 
                        }
                        if(jornada == "CLT turno"){
                            let pora2 = new Request(urlLogIn3, {
                                method: 'PATCH',
                                headers: h,
                                body: JSON.stringify({
                                    "ano": anoActual,
                                    "mes": monthNames[n],
                                    "nomeColaborador": content[0]['altFuncio'][0]['nomeColaborador'],
                                    "cargo": content[0]['altFuncio'][0]['cargo'],
                                    "salarioHora": estagio,
                                    "salarioTotal": salarioTotal * estagio,
                                    })                        
                                });
                                                
                                fetch(pora2)
                                .then(ress => ress.json())
                                .then(data5 => {
                                }) 
                        }
                }
            }
            gerarSalarios.addEventListener('click', (e) => {
                sociedade();                
            });
        });
        
